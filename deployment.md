# 🚀 Guide de Déploiement - GreenMarket

## Préparatifs

### 1. Créer un compte

#### Pour Vercel (Recommandé)
- Allez sur [vercel.com](https://vercel.com)
- Cliquez sur "Sign Up"
- Connectez-vous avec GitHub (recommandé) ou créiez un compte

#### Pour MongoDB Atlas
- Suivez les instructions dans `mongodb-setup.md`

## 📋 Commandes de Déploiement

### Méthode 1 : Déploiement via l'Interface Web Vercel

1. **Préparer le projet GitHub**
```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Créer un commit
git commit -m "Initial commit - GreenMarket App"

# Créer un repository GitHub et pousser
git remote add origin https://github.com/VotreNom/greenmarket-app.git
git branch -M main
git push -u origin main
```

2. **Déployer sur Vercel**
   - Allez sur [vercel.com/new](https://vercel.com/new)
   - Importer le repository GitHub
   - Configurer les variables d'environnement :
     - `MONGODB_URI` : votre chaîne de connexion MongoDB Atlas
   - Cliquez sur "Deploy"

### Méthode 2 : Déploiement via CLI Vercel

```bash
# 1. Installer Vercel CLI
npm install -g vercel

# 2. Se connecter à Vercel
vercel login

# 3. Initialiser le projet
vercel

# 4. Suivre les instructions interactives :
#   - Set up and deploy? (Y/n) → Y
#   - Which scope? → Sélectionnez votre compte
#   - Link to existing project? (y/N) → N
#   - What's your project's name? → greenmarket-app
#   - In which directory is your code located? → ./

# 5. Configurer les variables d'environnement
vercel env add MONGODB_URI

# 6. Entrer la valeur : votre chaîne de connexion MongoDB
# Sélectionner les environnements : Production, Preview, Development

# 7. Déployer
vercel --prod

# Votre application est maintenant en ligne à :
# https://greenmarket-app.vercel.app
```

### Méthode 3 : Déploiement via Git Push

```bash
# 1. Configurer Vercel avec GitHub
# - Allez sur vercel.com
# - Connectez votre compte GitHub
# - Importez le repository

# 2. Configurer les variables d'environnement dans Vercel Dashboard

# 3. À chaque push sur main, le déploiement se fait automatiquement
git add .
git commit -m "Update application"
git push origin main
```

## 🔧 Variables d'Environnement à Configurer

Dans Vercel Dashboard (Settings → Environment Variables) :

| Variable | Valeur | Description |
|----------|--------|-------------|
| `MONGODB_URI` | `mongodb+srv://...` | Chaîne de connexion MongoDB Atlas |
| `NODE_ENV` | `production` | Environnement d'exécution |

## 📊 Tests Post-Déploiement

### 1. Vérifier que l'application est en ligne
```bash
curl https://votre-app.vercel.app
```

### 2. Vérifier l'état de l'API
```bash
curl https://votre-app.vercel.app/api/health
```

### 3. Lister les produits
```bash
curl https://votre-app.vercel.app/api/products
```

### 4. Initialiser les données de test
```bash
curl -X POST https://votre-app.vercel.app/api/seed
```

### 5. Vérifier que les produits ont été ajoutés
```bash
curl https://votre-app.vercel.app/api/products
```

## 🔍 Dépannage

### Problème : Erreur de connexion MongoDB

**Solution :**
1. Vérifiez que MongoDB Atlas autorise toutes les IPs (0.0.0.0/0)
2. Vérifiez que les identifiants sont corrects
3. Vérifiez que la chaîne de connexion inclut le nom de la base : `/greenmarket`

### Problème : Variables d'environnement non chargées

**Solution :**
1. Allez dans Vercel Dashboard → Settings → Environment Variables
2. Vérifiez que les variables sont bien ajoutées
3. Redéployez : Vercel Dashboard → Deployments → Latest → "..." → Redeploy

### Problème : Build échoue

**Solution :**
1. Vérifiez que `package.json` est correct
2. Vérifiez que `engines.node` est défini (>=18.0.0)
3. Vérifiez les logs de build dans Vercel Dashboard

## 📝 Checklist de Déploiement

- [ ] Compte Vercel créé
- [ ] Compte MongoDB Atlas créé
- [ ] Cluster MongoDB créé
- [ ] Accès réseau configuré (0.0.0.0/0)
- [ ] Utilisateur de base de données créé
- [ ] Chaîne de connexion MongoDB récupérée
- [ ] Repository GitHub créé et poussé
- [ ] Projet Vercel créé
- [ ] Variables d'environnement configurées
- [ ] Déploiement réussi
- [ ] Tests API réussis
- [ ] Données de test initialisées
- [ ] URL de production notée

## 🌐 URL de l'Application

Une fois déployée, votre application sera accessible à :
```
https://greenmarket-app.vercel.app
```

Remplacez `greenmarket-app` par le nom que vous avez choisi lors du déploiement.
