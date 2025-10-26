# 📦 Configuration GitHub - GreenMarket

## 🎯 Pourquoi GitHub est nécessaire ?

GitHub est nécessaire pour :
1. **Prouver la logique de code** : Le prof peut voir votre code complet
2. **Versioning** : Historique des modifications
3. **Collaboration** : Facilite le travail en équipe (futur)
4. **Déploiement** : Vercel déploie directement depuis GitHub

## 📋 Étapes pour mettre le projet sur GitHub

### Étape 1 : Créer un repository GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur le bouton "New" (ou "New repository")
3. Donnez un nom : `greenmarket-app`
4. Description : "Application web GreenMarket pour la vente de produits bio"
5. Cochez "Public" (pour que le prof puisse voir)
6. Ne cochez PAS "Initialize with README" (on a déjà un README)
7. Cliquez sur "Create repository"

### Étape 2 : Initialiser Git dans votre projet

Dans le dossier du projet, ouvrez un terminal et exécutez :

```bash
# Initialiser Git
git init

# Vérifier les fichiers à ajouter
git status

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - GreenMarket API backend"

# Vérifier les fichiers commités
git log --oneline
```

### Étape 3 : Connecter à GitHub

```bash
# Ajouter le remote (remplacez VotreNom par votre nom GitHub)
git remote add origin https://github.com/VotreNom/greenmarket-app.git

# Renommer la branche en main
git branch -M main

# Pousser le code sur GitHub
git push -u origin main
```

### Étape 4 : Vérifier sur GitHub

Allez sur `https://github.com/VotreNom/greenmarket-app`

Vous devriez voir tous vos fichiers :
- server.js
- package.json
- vercel.json
- README.md
- etc.

---

## 🔧 Configuration supplémentaire pour le prof

### Créer un fichier .gitignore (déjà créé)

Le fichier `.gitignore` est déjà créé et exclut :
- `node_modules/` (gros fichiers inutiles)
- `.env` (variables sensibles)
- Les fichiers système

### Créer un fichier DESCRIPTION.md (optionnel mais recommandé)

Vous pouvez créer un fichier court pour expliquer au prof :

```markdown
# Description du Projet

## Ce que fait cette application

API REST pour la gestion de produits bio en circuit court.

## Fichiers importants

- `server.js` : Serveur principal avec toutes les routes
- `test-api.js` : Script de test automatique
- `PARTIE3-REPONSES.md` : Réponses à la partie 3 du devoir

## Comment tester

1. `npm install`
2. `npm start`
3. `npm run test-api`

## Déploiement

L'application peut être déployée sur Vercel via GitHub.
```

---

## 📝 Résumé des commandes

Copier-coller ces commandes dans l'ordre :

```bash
# 1. Dans le dossier du projet
git init

# 2. Vérifier les fichiers
git status

# 3. Ajouter tous les fichiers
git add .

# 4. Créer le premier commit
git commit -m "Initial commit - GreenMarket API"

# 5. Connecter à GitHub (remplacer VotreNom)
git remote add origin https://github.com/VotreNom/greenmarket-app.git

# 6. Renommer la branche
git branch -M main

# 7. Pousser sur GitHub
git push -u origin main
```

---

## 🎯 Checklist avant de soumettre au prof

- [ ] Repository GitHub créé et public
- [ ] Code poussé sur GitHub
- [ ] Tous les fichiers présents (server.js, package.json, etc.)
- [ ] README.md est lisible et complet
- [ ] PARTIE3-REPONSES.md est présent
- [ ] Le lien GitHub fonctionne et est accessible
- [ ] Le code est bien organisé et commenté

---

## 🔗 Lien GitHub à partager au prof

Une fois terminé, partagez ce lien au prof :
```
https://github.com/VotreNom/greenmarket-app
```

Le prof pourra :
- Voir tout votre code
- Cloner le projet pour tester
- Vérifier la logique de programmation
- Accéder à l'historique Git
