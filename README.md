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
greenmarket-app/
├── server.js          # Serveur principal Express
├── package.json       # Dépendances et scripts
├── vercel.json        # Configuration Vercel
├── env.example        # Variables d'environnement exemple
├── README.md          # Documentation
└── .gitignore         # Fichiers à ignorer
```

## 🔧 Installation et Démarrage

### Prérequis
- Node.js (version 18+)
- MongoDB Atlas (ou MongoDB local)
- Git

### Installation

1. **Cloner le projet**
```bash
git clone <url-du-repo>
cd greenmarket-app
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

### MongoDB Atlas (Recommandé)

1. Créer un compte sur [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Créer un nouveau cluster
3. Configurer l'accès réseau (0.0.0.0/0 pour le développement)
4. Créer un utilisateur de base de données
5. Récupérer la chaîne de connexion
6. Mettre à jour `MONGODB_URI` dans le fichier `.env`

### MongoDB Local

```bash
# Installer MongoDB localement
# Puis utiliser l'URI : mongodb://localhost:27017/greenmarket
```

## 🚀 Déploiement sur Vercel

### Méthode 1 : Interface Web Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. Se connecter avec GitHub
3. Importer le projet
4. Configurer les variables d'environnement
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

## 📊 Données de Test

Pour initialiser des données de test, utilisez l'endpoint :
```bash
curl -X POST https://greenmarket-app.vercel.app/api/seed
```

## 🔒 Sécurité

- Variables d'environnement pour les données sensibles
- Validation des données d'entrée
- Gestion des erreurs appropriée
- CORS configuré

## 📝 Licence

MIT License - Voir le fichier LICENSE pour plus de détails.

## 💻 Auteur

Développé par moi-même dans le cadre du cours de Cloud Computing et Déploiement d'applications web (Licence 3 - Développement Web).
