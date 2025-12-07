# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

---

## [v2.0.8] - 2025-12-07

### Added

- Added a new `favicon.png` (512×512) to improve browser and Google SERP branding.
- Declared the favicon in `_document.tsx` using an absolute path to ensure proper detection by search engines.
- Added a `logo` field to the website's JSON-LD structured data using `ImageObject`.

### Updated

- Improved structured data to provide Google with richer and clearer brand information.
- Ensured favicon compatibility with Google indexing requirements.

---

## [v2.0.7] - 2025-12-04

### Security

- **Updated Next.js to version 16.0.7**, addressing the React Flight protocol RCE vulnerability reported by GitHub Dependabot.
- **Forced `glob` to version 13.0.0 using npm overrides**, ensuring that all transitive dependencies (including Tailwind CSS) use a patched, non-vulnerable version.

### Technical Notes

- Regenerated `package-lock.json` through a clean dependency installation.
- Verified successful build after dependency updates.

---

## [v2.0.6] - 2025-11-21

### Infrastructure

- **Automatically refresh the long-lived Instagram access token** - Added a VPS-side Bash script and cron job to automatically refresh the long-lived Instagram access token used by the gallery component. No functional changes to the application code.

---

## [v2.0.5] - 2025-11-21

### Added

- **Dynamic Sitemap Generation** — Introduced automated sitemap creation for improved SEO and easier maintenance.

### Updated

- **Sitemap** — Replaced the old static version with a dynamic one that updates automatically based on site content.
- **Robots.txt** — Enhanced indexing behavior for better SEO performance.
- **Tailwind CSS Classes** — Reordered utility classes to ensure consistent styling.
- **Skill Cards** — Fixed shadow rendering for a cleaner and more uniform appearance.
- **Legal Pages** — Improved link styles and visual consistency.
- **SEO Configuration** — Fixed metadata issues and refined logic in the SEO component for more accurate indexing.

### Removed

- **Obsolete Comments** — Cleaned up unused and redundant comments for a leaner, more readable codebase.

### Summary

This release focuses on **SEO optimization**, **visual refinement**, and **code cleanup**.  
The addition of a **dynamic sitemap** modernizes SEO management, while style improvements and minor fixes enhance both **user experience** and **maintainability**.

---

## [v2.0.4] - 2025-11-20

### Changed

- Updated the deployment workflow to include detailed Docker build logs from the VPS, improving monitoring and troubleshooting during deployments.
- Ensured that all build-time secrets remain fully protected, with no exposure in GitHub Actions logs.
- Refined SSH-based deployment script logic for better transparency and reliability.

### Security

- Validated that sensitive environment variables never leave the VPS and remain invisible in all CI/CD logs, even with verbose build output enabled.

---

## [v2.0.3] - 2025-11-20

### Changed

- **Deployment Workflow** — Updated the CI/CD pipeline to perform Docker builds directly on the VPS instead of GitHub Actions, enhancing build reliability and reducing external dependencies.
- **Environment Variable Handling** — Securely injected server-only environment variables at build time using Docker build arguments.
- **Replace Grigri with Case Noisette** — Change tattoo artist.

### Improved

- **Security** — Strengthened protection of sensitive environment variables by enforcing strict file permissions and reapplying immutable attributes on `.env.production`.
- **Maintainability** — Simplified version management and rollback by retaining only the latest Docker images on the VPS.

---

## [v2.0.2] - 2025-11-07

### Updated

- **Tailwind CSS Classes** — Reordered utility classes for consistent styling across components.
- **Layout and Spacing** — Improved padding and layout for better responsiveness on mobile and desktop.
- **UI Text** — Refined wording and labels for greater clarity and consistency.

### Renamed

- `social-links.ts` → `social-links.config.ts`
- `seo.ts` → `seo.config.ts`
- `nav.ts` → `nav.config.ts`

These changes unify the naming convention of configuration files for better organization.

### Added

- **Project Version Number** — Now included in the global configuration file to ensure version traceability within the app.

---

## [v2.0.1] - 2025-11-06

### Changed

- **ESLint Configuration Overhaul**
  - Migrated to the new **Flat Config** format (`eslint.config.js`).
  - Updated ignore patterns to properly exclude build outputs (`.next`, `out`, `build`, etc.).
  - Fixed false-positive lint errors coming from generated Next.js files.
  - Improved compatibility with **TypeScript**, **React Hooks**, and **Next.js** rules.
- **Lint Cleanup**
  - Replaced all `any` types with proper typings.
  - Removed unused imports and variables.
  - Kept only intentional warnings (e.g., allowed `<img>` usage for specific cases).

### Added

- Added explicit **global environment definitions** for browser and Node contexts.
- Added strict **React Hooks rules** (`react-hooks/rules-of-hooks` and `react-hooks/exhaustive-deps`).

### Summary

This version focuses on **code quality and tooling stability**.  
It standardizes linting behavior across the project, removes false positives from generated files, and ensures a **clean and maintainable developer environment**.

---

## [v2.0.0] - 2025-11-06

### Added

- **Prettier Tailwind Plugin**: Ensures consistent Tailwind class ordering across the project.
- **Homepage Sections**: Split the homepage into multiple sections for better readability and structure.
- **Docker Support**: Added `Dockerfile`, `docker-compose.yml`, and `.dockerignore` for containerized deployment.
- **Global Configuration File**: Centralized application settings and constants.
- **Legal Pages** for compliance:
  - Legal Notice
  - Privacy Policy
  - Cookie Policy
- **Footer Links**: Added links to all legal pages.
- **Custom Error Pages**: Created dedicated `404` and `500` pages with SEO-friendly metadata.
- **CI/CD Workflow**: Introduced `deploy.yml` for automated VPS deployment.

### Changed

- **Dependencies**: Updated project dependencies to their latest compatible versions.
- **Configuration**:
  - Simplified `next.config.js` and `postcss.config.js`.
  - Updated Tailwind configuration.
  - Updated runtime config imports for base paths and SEO.
- **Sitemap**: Improved structure and added comments for clarity.
- **Footer**: Email address now dynamically loaded from the global config.
- **SEO**: Enhanced metadata for legal and error pages.
- **Styling**: Adjusted visuals and spacing for legal and error pages for better user experience.

### Removed

- **`BaseImage` Component**: Replaced with Next.js native `Image` for better optimization.
- **GitHub Pages Configurations**: Removed outdated GitHub Pages–specific setup and files.
- **Redundant Code**: Deleted obsolete comments and unused configuration variables.

### Summary

This major release improves the project’s architecture, enhances deployment automation, optimizes SEO and compliance, and prepares the site for production hosting beyond GitHub Pages.

---

## [v1.2.0] - 2024-12-05

### Added

- **Sitemap Integration**: Integrate sitemap to improve search engine indexing and site structure visibility.
- **Open Graph Meta Tags**: Added Open Graph tags to enhance link previews across social media platforms.

### Fixed

- Minor bug and wording fixes and performance improvements.

---

## [v1.1.1] - 2024-12-04

### Changed

- **Removed RTK Query Dependencies**: Removed RTK Query and related dependencies, as Instagram posts are now fetched using `getStaticProps` to generate static pages compatible with GitHub Pages.

---

## [v1.1.0] - 2024-12-04

### Changed

- **Removed RTK Query**: Replaced the usage of RTK Query for fetching Instagram posts with `getStaticProps` to generate static pages (for github pages).
- **Static Export**: Adapted the project for full static export using `next export`, making it compatible with GitHub Pages.
- **Enhanced Security**: Ensured the Instagram token is securely managed and used only during build time.

### Fixed

- **Image URLs**: Fixed issues with images not displaying correctly by adjusting the `basePath` and `assetPrefix` configurations in `next.config.js`.

---

## [v1.0.0] - 2024-12-03

- **Portfolio Gallery**: Displays the latest tattoos created by the studio.
- **Dynamic Instagram Integration**: Automatically fetches and displays Instagram posts using the Meta Graph API.
- **Responsive Design**: Optimized for seamless browsing on mobile, tablet, and desktop devices.
- **SEO Optimized**: Includes structured data (`JSON-LD`) to improve the site's visibility on search engines.
- **Maintenance Mode**: Displays a custom message when the site is temporarily unavailable due to updates or maintenance.
- **Smooth Animations**: Implemented elegant transitions and animations using Framer Motion.

---

## Versioning

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR**: Changes that break backward compatibility.
- **MINOR**: New features added in a backward-compatible manner.
- **PATCH**: Bug fixes or minor improvements.
