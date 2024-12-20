# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

- Register the domain name mowgli-tattoo-studio.fr (IMPORTANT)
- Set up a database to store necessary project data, including Instagram access tokens.
- Implement a cron job to refresh the Instagram access token every 60 days automatically.
- Update the **legal notice** once the hosting provider is chosen.
- Generate and integrate an automatic **sitemap** for better SEO and site indexing.

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
