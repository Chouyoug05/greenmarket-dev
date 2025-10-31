# 🌱 GreenMarket - Application Web Bio

Application web pour la vente de produits bio en circuit court que j'ai développée dans le cadre de mon devoir de Cloud Computing.

## 📋 Description

J'ai créé cette plateforme e-commerce spécialisée dans la vente de produits biologiques en circuit court, permettant aux consommateurs d'acheter directement auprès des producteurs locaux.

## 🚀 Fonctionnalités

- **API REST** pour la gestion des produits
- **Base de données MongoDB** pour le stockage des données
- **Interface simple** pour consulter les produits bio
- **Gestion des stocks** en temps réel
- **Informations détaillées** sur les producteurs et origines

## 🛠️ Technologies Utilisées

- **Backend**: Node.js + Express.js
- **Base de données**: MongoDB (MongoDB Atlas)
- **Déploiement**: Vercel
- **Gestion des variables d'environnement**: dotenv

## 📁 Structure du Projet

```
greenmarket-dev/
├── server.js              # Serveur principal Express avec routes API
├── test-api.js            # Script de test automatique de l'API
├── package.json           # Dépendances et scripts Node.js
├── vercel.json            # Configuration de déploiement Vercel
├── env.example            # Exemple de variables d'environnement
├── README.md              # Documentation principale
├── PARTIE3-REPONSES.md    # Réponses à la partie 3 du devoir
├── COMMENCER-ICI.md       # Guide de démarrage rapide
├── GUIDE-TEST.md          # Guide détaillé pour tester l'API
├── GITHUB-SETUP.md        # Instructions pour GitHub
├── mongodb-setup.md       # Guide de configuration MongoDB Atlas
├── deployment.md          # Guide de déploiement sur Vercel
└── .gitignore             # Fichiers à exclure de Git
```

## 🔧 Installation et Démarrage

### Prérequis
- Node.js (version 18+)
- MongoDB Atlas (ou MongoDB local)
- Git

### Installation

1. **Cloner le projet**
```bash
git clone https://github.com/Chouyoug05/greenmarket-dev.git
cd greenmarket-dev
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration des variables d'environnement**
```bash
# Copier le fichier d'exemple
cp env.example .env

# Éditer le fichier .env avec vos paramètres
# Notamment MONGODB_URI pour la connexion à la base
```

4. **Démarrer l'application**
```bash
# Mode développement
npm run dev

# Mode production
npm start
```

L'application sera accessible sur `http://localhost:3000`

## 🧪 Tests de l'API

Pour tester mon API sans front-end, j'ai créé un script de test automatique :

```bash
# Dans un terminal, démarrer le serveur
npm start

# Dans un autre terminal, exécuter les tests
npm run test-api
```

Ce script teste automatiquement :
- La santé de l'API (`/api/health`)
- La récupération des produits (`/api/products`)
- La création de produits (`POST /api/products`)
- L'initialisation des données de test (`/api/seed`)

## 🌐 API Endpoints

### Base URL
```
http://localhost:3000 (local)
https://greenmarket-app.vercel.app (production)
```

### Endpoints Disponibles

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Page d'accueil de l'API |
| GET | `/api/health` | Vérification de l'état de l'API |
| GET | `/api/products` | Récupérer tous les produits |
| POST | `/api/products` | Créer un nouveau produit |
| GET | `/api/products/:id` | Récupérer un produit par ID |
| POST | `/api/seed` | Initialiser des données de test |

### Exemples d'utilisation

**Récupérer tous les produits :**
```bash
curl https://greenmarket-app.vercel.app/api/products
```

**Créer un produit :**
```bash
curl -X POST https://greenmarket-app.vercel.app/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Carottes Bio",
    "description": "Carottes biologiques du jardin",
    "price": 2.50,
    "category": "Légumes",
    "producer": "Ferme Bio",
    "origin": "Normandie",
    "stock": 30
  }'
```

## 🗄️ Configuration MongoDB

Pour mon projet, j'ai configuré la connexion à MongoDB. Voici comment j'ai procédé :

### MongoDB Atlas (Recommandé pour le déploiement)

1. J'ai créé un compte sur [MongoDB Atlas](https://www.mongodb.com/atlas)
2. J'ai créé un nouveau cluster gratuit (M0 - FREE TIER)
3. J'ai configuré l'accès réseau (0.0.0.0/0 pour permettre toutes les connexions)
4. J'ai créé un utilisateur de base de données
5. J'ai récupéré la chaîne de connexion
6. J'ai mis à jour `MONGODB_URI` dans le fichier `.env`

**Note** : Pour ce devoir, la création d'un compte MongoDB Atlas n'est pas obligatoire. La logique de code et la configuration sont plus importantes que la connexion réelle.

### MongoDB Local (Pour les tests locaux)

```bash
# Installer MongoDB localement
# Puis utiliser l'URI : mongodb://localhost:27017/greenmarket
```

## 🚀 Déploiement sur Vercel

Mon application est configurée pour être déployée sur Vercel. J'ai préparé deux méthodes :

### Méthode 1 : Interface Web Vercel (Recommandée)

1. Aller sur [vercel.com](https://vercel.com)
2. Se connecter avec mon compte GitHub
3. Importer le projet depuis `https://github.com/Chouyoug05/greenmarket-dev`
4. Configurer les variables d'environnement (MONGODB_URI)
5. Déployer

### Méthode 2 : CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Configurer les variables d'environnement
vercel env add MONGODB_URI
```

**Note** : Le déploiement sur Vercel est optionnel pour ce devoir, mais c'est un bonus apprécié.

## 📊 Données de Test

Pour initialiser des données de test, utilisez l'endpoint :
```bash
curl -X POST https://greenmarket-app.vercel.app/api/seed
```

## 🔒 Sécurité

Dans mon application, j'ai implémenté plusieurs mesures de sécurité :

- **Variables d'environnement** : J'utilise `.env` pour stocker les données sensibles (MONGODB_URI)
- **Validation des données** : Les modèles Mongoose valident les données d'entrée
- **Gestion des erreurs** : J'ai ajouté une gestion appropriée des erreurs dans toutes les routes
- **CORS configuré** : J'ai configuré CORS pour autoriser les requêtes cross-origin

## 📝 Licence

MIT License - Voir le fichier LICENSE pour plus de détails.

## 📦 Repository GitHub

Ce projet est disponible sur GitHub :
```
https://github.com/Chouyoug05/greenmarket-dev
```

## 💻 Auteur

**Contexte du projet :**

Ce projet a été développé par moi-même dans le cadre du devoir de **Cloud Computing et Déploiement d'applications web** du niveau **Licence 3 – Développement Web** à l'**École Moderne d'Informatique et de Gestion**.

**Objectif pédagogique :**
- Comprendre les principes fondamentaux du cloud computing
- Analyser différentes solutions d'hébergement cloud
- Mettre en œuvre le déploiement d'une application web sur une plateforme cloud

**Contexte métier :**
Le projet simule une application pour la startup **GreenMarket**, spécialisée dans la vente de produits bio en circuit court.

Pour plus de détails sur mes réponses au devoir, consultez le fichier `PARTIE3-REPONSES.md`.
