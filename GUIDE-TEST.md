# 🧪 Guide de Test - API GreenMarket

## 📋 Vue d'ensemble

Ce guide explique comment tester l'API GreenMarket sans avoir besoin d'un front-end.

## ✅ Option 1 : Tests automatisés (Recommandé)

### Étapes

1. **Installer les dépendances** :
```bash
npm install
```

2. **Démarrer le serveur** (dans un premier terminal) :
```bash
npm start
```

3. **Dans un autre terminal, exécuter les tests** :
```bash
npm run test-api
```

Vous verrez tous les tests s'exécuter automatiquement et vérifiez que l'API fonctionne correctement.

---

## ✅ Option 2 : Tests manuels avec curl

### 1. Démarrer le serveur

```bash
npm start
```

Le serveur sera accessible sur `http://localhost:3000`

### 2. Tester les endpoints

#### Test de santé
```bash
curl http://localhost:3000/api/health
```

Réponse attendue :
```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "database": "Connected"
}
```

#### Lister les produits (initialement vide)
```bash
curl http://localhost:3000/api/products
```

#### Créer un produit
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Tomates Bio",
    "description": "Tomates cerises biologiques",
    "price": 4.50,
    "category": "Légumes",
    "producer": "Ferme du Val Vert",
    "origin": "Région parisienne",
    "organic": true,
    "stock": 25
  }'
```

#### Initialiser les données de test
```bash
curl -X POST http://localhost:3000/api/seed
```

#### Vérifier les produits après seed
```bash
curl http://localhost:3000/api/products
```

---

## ✅ Option 3 : Tests avec Postman ou Insomnia

### Télécharger les outils

- **Postman** : https://www.postman.com/downloads/
- **Insomnia** : https://insomnia.rest/download

### Configuration

1. Créer une nouvelle collection "GreenMarket API"
2. Configurer la base URL : `http://localhost:3000`

### Endpoints à tester

| Méthode | URL | Description |
|---------|-----|-------------|
| GET | `http://localhost:3000/` | Page d'accueil |
| GET | `http://localhost:3000/api/health` | Santé de l'API |
| GET | `http://localhost:3000/api/products` | Liste des produits |
| POST | `http://localhost:3000/api/products` | Créer un produit |
| GET | `http://localhost:3000/api/products/:id` | Récupérer un produit |
| POST | `http://localhost:3000/api/seed` | Initialiser les données |

### Exemple de body pour POST /api/products

```json
{
  "name": "Carottes Bio",
  "description": "Carottes biologiques fraîches",
  "price": 2.50,
  "category": "Légumes",
  "producer": "Ferme Bio",
  "origin": "Normandie",
  "organic": true,
  "stock": 20
}
```

---

## ✅ Option 4 : Tests avec le navigateur

### Endpoints GET (accessibles directement dans le navigateur)

1. **Page d'accueil** :
```
http://localhost:3000/
```

2. **Santé de l'API** :
```
http://localhost:3000/api/health
```

3. **Liste des produits** :
```
http://localhost:3000/api/products
```

4. **Initialiser les données** :
Vous devrez utiliser curl ou Postman pour les requêtes POST.

---

## 🔍 Résultats attendus

### Après npm run test-api

Vous devriez voir :
```
🧪 ===========================
🧪 Tests de l'API GreenMarket
🧪 ===========================

📡 Test 1: Vérification de santé (GET /api/health)
   ✓ Status: 200
   ✓ Réponse: { status: 'OK', timestamp: '...', database: 'Connected' }

📦 Test 2: Liste des produits (GET /api/products)
   ✓ Status: 200
   ✓ Nombre de produits: 0

✏️  Test 3: Création d'un produit (POST /api/products)
   ✓ Status: 201
   ✓ Produit créé: { ... }

... (plus de tests)

✅ Tous les tests ont réussi!
```

---

## ❓ Dépannage

### Erreur "Cannot find module"

**Solution** : 
```bash
npm install
```

### Erreur "Port already in use"

**Solution** : 
Changer le port dans le fichier `.env` ou arrêter l'autre processus.

### Erreur de connexion MongoDB

**Solution** : 
1. Vérifier que MongoDB est installé localement, OU
2. Créer un compte MongoDB Atlas et configurer MONGODB_URI dans `.env`

### Base de données vide

**Solution** : 
Utiliser l'endpoint `/api/seed` pour initialiser les données de test.

---

## 📝 Checklist de Test pour le Prof

Avant de soumettre votre devoir, vérifiez que :

- [ ] Le serveur démarre sans erreur (`npm start`)
- [ ] Le test automatique fonctionne (`npm run test-api`)
- [ ] La route `/api/health` retourne un statut OK
- [ ] La route `/api/products` retourne la liste des produits
- [ ] La création de produit fonctionne (POST /api/products)
- [ ] La récupération par ID fonctionne (GET /api/products/:id)
- [ ] L'endpoint `/api/seed` initialise les données de test
- [ ] La connexion MongoDB fonctionne (status: "Connected")
- [ ] Tous les tests passent sans erreur

---

## 🎯 Résultat final

Une fois tous les tests réussis, vous pouvez être sûr que :
1. ✅ Votre API fonctionne correctement
2. ✅ Toutes les routes sont opérationnelles
3. ✅ La connexion MongoDB est établie
4. ✅ La logique backend est correcte
5. ✅ Vous pouvez déployer sur Vercel avec confiance

Le professeur pourra tester votre API même sans front-end !
