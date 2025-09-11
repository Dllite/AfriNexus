#!/bin/bash

# Script de déploiement pour AfriNexus Forum
echo "🚀 Déploiement d'AfriNexus Forum..."

# Vérifier la version de Node.js
echo "📋 Vérification de la version de Node.js..."
node --version

# Nettoyer les installations précédentes
echo "🧹 Nettoyage des installations précédentes..."
rm -rf node_modules
rm -f package-lock.json

# Installer toutes les dépendances
echo "📦 Installation des dépendances..."
npm install

# Vérifier que tous les composants existent
echo "🔍 Vérification des composants..."
if [ ! -f "src/components/Header.tsx" ]; then
    echo "❌ Header.tsx manquant"
    exit 1
fi

if [ ! -f "src/components/Hero.tsx" ]; then
    echo "❌ Hero.tsx manquant"
    exit 1
fi

if [ ! -f "src/components/IntroSection.tsx" ]; then
    echo "❌ IntroSection.tsx manquant"
    exit 1
fi

if [ ! -f "src/components/AboutSection.tsx" ]; then
    echo "❌ AboutSection.tsx manquant"
    exit 1
fi

if [ ! -f "src/contexts/ThemeContext.tsx" ]; then
    echo "❌ ThemeContext.tsx manquant"
    exit 1
fi

if [ ! -f "src/contexts/LanguageContext.tsx" ]; then
    echo "❌ LanguageContext.tsx manquant"
    exit 1
fi

echo "✅ Tous les composants sont présents"

# Construire l'application
echo "🔨 Construction de l'application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Construction réussie!"
    echo "🎉 Déploiement terminé avec succès!"
else
    echo "❌ Erreur lors de la construction"
    exit 1
fi
