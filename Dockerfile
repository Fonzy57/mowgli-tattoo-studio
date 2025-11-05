# -------- Stage 1: Build (install dependencies + build Next.js) --------
FROM node:20-alpine AS builder
WORKDIR /app

# 1) Copy dependency manifests first to leverage Docker layer caching
COPY package*.json ./

# 2) Install dependencies (prod & dev for build)
RUN npm ci

# 3) Copy application source code
COPY . .

# 4) Inject public env variables at build time
#    (received from --build-arg in GitHub Actions)
ARG NEXT_PUBLIC_BASE_URL
RUN echo "✅ NEXT_PUBLIC_BASE_URL detected"
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}

# 5) Build Next.js in production mode (standalone output)
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build


# -------- Stage 2: Minimal runtime environment --------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# 1) Security: run as non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# 2) Copy the standalone output + static assets
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# 3) Tools for healthcheck
RUN apk add --no-cache curl

# 4) Reliable healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
  CMD ip=$(hostname -i | awk '{print $1}'); curl -fs "http://${ip}:3001/" || exit 1

# 5) Permissions
RUN chown -R nextjs:nodejs /app

# 6) Expose app port
EXPOSE 3001

# 7) Runtime environment
ENV PORT=3001
ENV HOST=0.0.0.0

# 8) Replace localhost binding for standalone server
RUN sed -i 's/localhost/0.0.0.0/g' server.js

# 9) Run as non-root
USER nextjs

# 10) Start
CMD ["node", "server.js"]
