#!/bin/bash

# Variablen anpassen
# GITHUB_USERNAME="Kkuhn1994"
REPO_NAME="TeaShop"
BASE_HREF="/TeaShop/"  # wichtig für Flutter Web
REPO_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
BRANCH="gh-pages"

echo "1. Flutter Web App bauen..."
flutter build web --base-href="$BASE_HREF"

echo "2. In build/web wechseln..."
cd build/web || { echo "build/web Verzeichnis nicht gefunden"; exit 1; }

echo "5. Auf Branch $BRANCH wechseln..."
git checkout -b $BRANCH

echo "6. Alle Dateien hinzufügen..."
git add .

echo "7. Commit erstellen..."
git commit -m "Deploy Flutter Web App to GitHub Pages"

echo "8. Auf GitHub pushen (force)..."
git push -f origin $BRANCH

echo "Fertig! Deine Flutter Web App wurde auf GitHub Pages deployed."
cd ../..