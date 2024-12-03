# Mowgli Tattoo Studio

[🇬🇧 Read this document in English](./README.md)

Ce projet est un site web créé pour **Mowgli Tattoo Studio**, un studio de tatouage spécialisé dans les tatouages réalistes en noir et gris. Le site met en avant les réalisations du tatoueur, son style artistique, et offre une présentation professionnelle tout en récupérant automatiquement ses publications Instagram via l'API Graph de Meta.

---

<details>
<summary>Table des matières</summary>

- [Technologies utilisées](#technologies-utilisées)
- [Fonctionnalités principales](#fonctionnalités-principales)
- [Installation et lancement](#installation-et-lancement)
  - [Prérequis](#prérequis)
  - [Étapes d'installation](#étapes-dinstallation)
- [Ressources utiles](#ressources-utiles)
- [Copyright](#copyright)
</details>

---

## Technologies utilisées

Ce projet a été développé avec les technologies suivantes :

- **[Next.js](https://nextjs.org/)** (v13.5.7) : Framework React pour le rendu côté serveur (SSR) et les fonctionnalités modernes.
- **[TypeScript](https://www.typescriptlang.org/)** : Ajout de typage statique pour un code plus robuste et maintenable.
- **[Tailwind CSS](https://tailwindcss.com/)** : Framework CSS utilitaire pour un design personnalisé et réactif.
- **[RTK Query](https://redux-toolkit.js.org/introduction/getting-started)** : Gestion des appels API et des états côté client.
- **[Instagram Graph API](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login)** : Pour récupérer dynamiquement les publications Instagram du tatoueur.
- **[Framer Motion](https://motion.dev/docs)**: Utilisé pour créer des animations fluides et des transitions élégantes sur le site.

---

## Fonctionnalités principales

Ce site web est conçu pour offrir une expérience utilisateur optimale et refléter le style unique de **Mowgli Tattoo Studio**.  
Voici ses principales fonctionnalités :

- **Galerie des réalisations** : Présente les derniers tatouages réalisés par le studio.
- **Connexion Instagram dynamique** : Les publications Instagram sont automatiquement récupérées et affichées sur le site grâce à l'API Graph de Meta.
- **Responsive Design** : Optimisé pour une expérience utilisateur fluide sur mobiles, tablettes et ordinateurs.
- **SEO optimisé** : Intégration de données structurées (`JSON-LD`) pour améliorer la visibilité du site dans les moteurs de recherche.
- **Mode maintenance** : Permet d'afficher un message dédié lorsque le site est temporairement indisponible pour mise à jour ou maintenance technique.

---

## Installation et lancement

### Prérequis

- **Node.js** (version 16.8 ou supérieure)

  Vérifiez votre version de Node.js :

  ```bash
  node -v
  ```

  Si vous n'avez pas la version requise, téléchargez et installez la dernière version depuis [Node.js](https://nodejs.org/).

- **npm**, **yarn**, ou **pnpm** pour gérer les dépendances

### Étapes d'installation

1. **Clonez le dépôt** :

   ```bash
   git clone https://github.com/Fonzy57/mowgli-tattoo-studio.git
   ```

2. **Accédez au dossier du projet** :

   ```bash
   cd mowgli-tattoo-studio
   ```

3. **Installez les dépendances** :

   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Configurez les variables d'environnement** :

   - Créez un fichier `.env.local` à la racine du projet.
   - Ajoutez les clés nécessaires, comme le token d'accès à l'API Graph d'Instagram :
     <br>
     <br>

   ```env
   # Permet l'authentification et l'appel à l'API Graph Instagram
   # Pour générer ce token, connectez-vous à votre compte Meta Developer et créez une application. Assurez-vous que votre compte Instagram est lié.
   INSTAGRAM_TOKEN=your-instagram-access-token

   # Tester le mode maintenance en passant la variable à true
   NEXT_PUBLIC_MAINTENANCE_MODE=false

   ```

5. **Lancez le serveur de développement** :

   ```bash
   npm run dev
   # ou
   yarn run dev
   ```

6. **Ouvrez l'application dans votre navigateur** :  
   Accédez à [http://localhost:3000](http://localhost:3000) ou [http://127.0.0.1:3000/](http://127.0.0.1:3000/) pour visualiser le site.

---

## Ressources utiles

- [Next.js Documentation](https://nextjs.org/docs/13/getting-started)
- [Redux Toolkit Query Documentation](https://redux-toolkit.js.org/rtk-query/overview)
- [Instagram Graph API Documentation](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
- [Framer Motion Documentation](https://motion.dev/docs)

---

## Copyright

© 2024 Mowgli Tattoo Studio. Tous droits réservés.

Ce projet, incluant son code, son design et son contenu, est la propriété intellectuelle de son auteur.  
Toute utilisation, distribution ou modification non autorisée est strictement interdite sans consentement écrit préalable.
