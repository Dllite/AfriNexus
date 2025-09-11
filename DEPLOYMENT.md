# Instructions de Déploiement

## Problèmes résolus

1. **Erreur tailwindcss manquant** : `tailwindcss`, `autoprefixer` et `postcss` ont été déplacés vers les `dependencies` au lieu de `devDependencies`.

2. **Modules non trouvés** : Vérifiez que tous les composants existent dans `src/components/`.

## Commandes de déploiement

```bash
# 1. Installer toutes les dépendances (y compris devDependencies)
npm install

# 2. Construire l'application
npm run build

# 3. Démarrer l'application
npm start
```

## Structure des fichiers requise

```
afrinexus-forum-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── IntroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── Services.tsx
│   │   ├── Partners.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ProfileSelector.tsx
│   │   ├── PersonalizedContent.tsx
│   │   ├── TypingEffect.tsx
│   │   └── CursorEffects.tsx
│   ├── contexts/
│   │   ├── ThemeContext.tsx
│   │   └── LanguageContext.tsx
│   └── hooks/
│       └── useMouseInteractions.ts
├── public/
│   ├── logo.png
│   ├── logo-light.png
│   └── logo-dark.png
├── package.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

## Si les erreurs persistent

1. Vérifiez que Node.js version 18+ est installé
2. Supprimez `node_modules` et `package-lock.json`
3. Exécutez `npm install` à nouveau
4. Vérifiez que tous les fichiers de composants existent
