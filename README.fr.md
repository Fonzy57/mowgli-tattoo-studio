# Mowgli Tattoo Studio 🍌

[🇬🇧 Read this document in English](./README.md)

**Mowgli Tattoo Studio** est un site web moderne et entièrement responsive conçu pour mettre en valeur l’art d’un studio de tatouage spécialisé dans les **tatouages réalistes en noir et gris**.  
La plateforme met l’accent sur l’esthétique, la performance et la conformité, offrant un portfolio numérique immersif destiné aux clients et aux passionnés de tatouage.

---

## 🧭 Présentation du projet

Ce projet sert de **vitrine numérique professionnelle** pour Mowgli Tattoo Studio.  
Il met en avant le style de l’artiste, fournit les informations essentielles aux clients et garantit une visibilité optimale grâce à une structure optimisée pour le référencement naturel (SEO).

Au-delà de son aspect visuel, le site a été conçu pour être **facile à maintenir et évolutif**, intégrant des fonctionnalités prêtes pour la production telles que la compatibilité **Docker**, un **déploiement automatisé**, la **conformité légale**, et une **galerie dynamique alimentée par l’API Graph de Meta (Instagram)**.

---

## ⚙️ Technologies principales

- **[Next.js 16](https://nextjs.org/)** — Framework moderne basé sur React pour créer des applications performantes avec SSR et SSG.
- **[React 19](https://react.dev/)** — Dernière version de React pour une interface dynamique et modulaire.
- **[TypeScript](https://www.typescriptlang.org/)** — Ajoute un typage statique pour un code plus robuste et maintenable.
- **[Tailwind CSS](https://tailwindcss.com/)** — Framework CSS utilitaire pour une mise en page fluide et responsive.
- **[Framer Motion](https://motion.dev/)** — Pour des animations et transitions fluides entre les pages et composants.
- **[API Instagram Graph](https://developers.facebook.com/docs/instagram-platform/)** — Récupère et affiche automatiquement les dernières publications Instagram de l’artiste.
- **[Docker](https://www.docker.com/)** — Environnement conteneurisé pour des déploiements fiables et reproductibles.
- **[ESLint](https://eslint.org/)** + **[Prettier](https://prettier.io/)** — Garantissent un code propre et cohérent sur l’ensemble du projet.
- **[CI/CD GitHub Actions](https://docs.github.com/en/actions)** — Pipeline de déploiement automatisé pour un hébergement sur VPS.

---

## 🌐 Fonctionnalités principales

- **Galerie dynamique** — Affiche les dernières publications Instagram via l’API Graph de Meta.
- **Pages légales** — Comprend les mentions légales, la politique de confidentialité et la politique de cookies, conformément à la réglementation européenne.
- **Déploiement Dockerisé** — Prêt pour l’hébergement sur VPS grâce à une architecture conteneurisée.
- **Code cohérent** — ESLint et Prettier (avec plugin Tailwind) assurent une structure claire et uniforme.
- **Structure modulaire** — Page d’accueil divisée en sections pour une meilleure lisibilité et maintenance.
- **Optimisation SEO** — Métadonnées personnalisées et sitemap structuré pour un meilleur référencement.
- **Pages d’erreur personnalisées** — Pages 404 et 500 dédiées avec métadonnées adaptées au référencement.
- **Workflow CI/CD automatisé** — Simplifie les mises à jour de production via GitHub Actions.

---

## 🧑‍⚖️ Conformité et éthique

Pour garantir la transparence et le respect des lois en vigueur, le projet inclut :

- **Mentions légales**
- **Politique de confidentialité**
- **Politique de cookies**

L’ensemble du contenu est conforme au **RGPD** (Règlement Général sur la Protection des Données) et aux exigences du droit numérique français.

---

## 🚀 Déploiement et infrastructure

Le site est **dockerisé** et déployé automatiquement via **GitHub Actions** (`deploy.yml`) sur un **serveur VPS**.  
Cette configuration assure des builds cohérents, des rollbacks rapides et un environnement de production reproductible.

---

## 🧩 Normes de développement

- **Linting :** géré par ESLint (`eslint-config-next`, `typescript-eslint`, `eslint-plugin-react-hooks`).
- **Formatage :** assuré par Prettier et le plugin **Tailwind CSS**.
- **Typage :** contrôlé par TypeScript pour éviter les erreurs à l’exécution.
- **Style de code :** conforme aux conventions modernes de React et Next.js.

---

## 📈 Référencement et accessibilité

Le site intègre :

- Des métadonnées personnalisées pour chaque page (titre, description, balises Open Graph).
- Un sitemap généré et maintenu automatiquement.
- Une structure optimisée et un HTML sémantique pour un meilleur référencement.
- Des bonnes pratiques d’accessibilité pour une expérience fluide sur tous les appareils.

---

## 🧾 Versioning

Le projet suit la **[sémantique de versionnage](https://semver.org/lang/fr/)** :

- **MAJEUR** — Changements structurels ou rétro-incompatibles
- **MINEUR** — Nouvelles fonctionnalités rétro-compatibles
- **PATCH** — Corrections et améliorations mineures

Dernière version stable : **v2.1.9**

---

## 🖋️ Auteur

Développé et maintenu par **[Fonzy57](https://github.com/Fonzy57)**  
© 2025 Mowgli Tattoo Studio. Tous droits réservés.

Toute reproduction, distribution ou modification non autorisée est strictement interdite.
