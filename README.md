# Mowgli Tattoo Studio

[🇫🇷 Lire ce document en français](./README.fr.md)

This project is a website built for **Mowgli Tattoo Studio**, a tattoo studio specializing in realistic black-and-gray tattoos. The site highlights the artist's portfolio, artistic style, and provides a professional platform while dynamically fetching Instagram posts through Meta’s Graph API.

---

<details>
<summary><h3>Table of Contents</h3></summary>

- [Technologies Used](#technologies-used)
- [Key Features](#key-features)
- [Installation and Setup](#installation-and-setup)
  - [Prerequisites](#prerequisites)
  - [Installation Steps](#installation-steps)
- [Useful Resources](#useful-resources)
- [Copyright](#copyright)
</details>

---

## Technologies Used

This project leverages the following technologies:

- **[Next.js](https://nextjs.org/)** (v13.5.7): A React framework for server-side rendering (SSR) and modern web development features.
- **[TypeScript](https://www.typescriptlang.org/)**: Adds static typing for a more robust and maintainable codebase.
- **[RTK Query](https://redux-toolkit.js.org/introduction/getting-started)**: Manages API calls and client-side state efficiently.
- **[Instagram Graph API](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login)**: Dynamically fetches the artist’s Instagram posts.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for custom and responsive design.
- **[Framer Motion](https://motion.dev/docs)**: Used to implement smooth animations and transitions across the website.

---

## Key Features

This website is designed to deliver an optimal user experience and showcase the unique style of **Mowgli Tattoo Studio**.  
Here are its main features:

- **Portfolio Gallery**: Displays the latest tattoos created by the studio.
- **Dynamic Instagram Integration**: Automatically fetches and displays Instagram posts using Meta’s Graph API.
- **Responsive Design**: Optimized for seamless browsing across mobile, tablet, and desktop devices.
- **SEO Optimized**: Includes structured data (`JSON-LD`) to improve the site's visibility on search engines.
- **Maintenance Mode**: Displays a custom message when the site is temporarily unavailable due to updates or maintenance.

---

## Installation and Setup

### Prerequisites

- **Node.js** (version 16.8 or higher)

  Check your Node.js version:

  ```bash
  node -v
  ```

  If you don't have the required version, download and install the latest version from [Node.js](https://nodejs.org/).

- **npm**, **yarn**, or **pnpm** for managing dependencies

### Installation Steps

1. **Clone the repository** :

   ```bash
   git clone https://github.com/Fonzy57/mowgli-tattoo-studio.git
   ```

2. **Navigate to the project folder** :

   ```bash
   cd mowgli-tattoo-studio
   ```

3. **Install dependencies** :

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Set up environment variables** :

   - Create a `.env.local` file at the root of the project.
   - Add the necessary keys, such as access token to the Instagram Graph API:
     <br>
     <br>

   ```env
   # Authentication and API calls for Instagram Graph API
   # To generate this token, log in to your Meta Developer account and create an application. Make sure your Instagram account is linked.
   INSTAGRAM_TOKEN=your-instagram-access-token

   # Enable maintenance mode by setting this to true
   NEXT_PUBLIC_MAINTENANCE_MODE=false

   ```

5. **Start the development server** :

   ```bash
   npm run dev
   # or
   yarn run dev
   ```

6. **Open the application in your browser** :  
   Go to [http://localhost:3000](http://localhost:3000) or [http://127.0.0.1:3000/](http://127.0.0.1:3000/) to view the site.

---

## Useful Resources

- [Next.js Documentation](https://nextjs.org/docs/13/getting-started)
- [Redux Toolkit Query Documentation](https://redux-toolkit.js.org/rtk-query/overview)
- [Instagram Graph API Documentation](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
- [Framer Motion Documentation](https://motion.dev/docs)

---

## Copyright

© 2024 Mowgli Tattoo Studio. All rights reserved.

This project, including its code, design, and content, is the intellectual property of its author.  
Unauthorized use, distribution, or modification is strictly prohibited without prior written consent.
