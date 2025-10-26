# 🔧 Configuration MongoDB Atlas

## Étapes pour configurer MongoDB Atlas

### 1. Créer un compte MongoDB Atlas

1. Allez sur [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Cliquez sur "Try Free"
3. Créez un compte ou connectez-vous

### 2. Créer un nouveau cluster

1. Dans le tableau de bord Atlas, cliquez sur "Build a Database"
2. Choisissez l'option gratuite (M0 - FREE TIER)
3. Sélectionnez un fournisseur cloud (AWS, Google Cloud, ou Azure)
4. Choisissez une région proche
5. Donnez un nom à votre cluster (ex: "GreenMarket-Cluster")
6. Cliquez sur "Create"

### 3. Configurer l'accès réseau

1. Allez dans "Network Access"
2. Cliquez sur "Add IP Address"
3. Pour le développement, cliquez sur "Allow Access from Anywhere" (0.0.0.0/0)
4. Cliquez sur "Confirm"

### 4. Créer un utilisateur de base de données

1. Allez dans "Database Access"
2. Cliquez sur "Add New Database User"
3. Choisissez "Password" comme méthode d'authentification
4. Entrez un nom d'utilisateur (ex: "greenmarket_user")
5. Entrez un mot de passe (à garder en sécurité !)
6. Donnez les permissions "Read and write to any database"
7. Cliquez sur "Add User"

### 5. Récupérer la chaîne de connexion

1. Retournez dans "Database"
2. Cliquez sur "Connect" sur votre cluster
3. Choisissez "Connect your application"
4. Sélectionnez "Node.js" comme driver
5. Copiez la chaîne de connexion

Elle ressemble à :
```
mongodb+srv://greenmarket_user:<password>@greenmarket-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### 6. Configurer la chaîne de connexion dans le projet

Remplacez `<password>` par le mot de passe que vous avez créé et ajoutez le nom de la base :
```
mongodb+srv://greenmarket_user:VotreMotDePasse@greenmarket-cluster.xxxxx.mongodb.net/greenmarket?retryWrites=true&w=majority
```

Mettez à jour cette valeur dans :
- Le fichier `.env` pour le développement local
- Les variables d'environnement de Vercel pour la production

### 7. Configurer dans Vercel (pour le déploiement)

1. Allez sur [vercel.com](https://vercel.com)
2. Sélectionnez votre projet
3. Allez dans "Settings" → "Environment Variables"
4. Ajoutez :
   - Nom : `MONGODB_URI`
   - Valeur : votre chaîne de connexion complète
5. Sélectionnez tous les environnements (Production, Preview, Development)
6. Cliquez sur "Save"

## Test de connexion

Une fois configuré, vous pouvez tester la connexion en :
1. Démarration du serveur : `npm start`
2. Vous devriez voir : `✅ Connecté à MongoDB`

## Schéma de la base de données

La base de données `greenmarket` contient une collection `products` avec le schéma suivant :

```javascript
{
  name: String (requis),
  description: String (requis),
  price: Number (requis),
  category: String (requis),
  producer: String (requis),
  origin: String (requis),
  organic: Boolean (défaut: true),
  stock: Number (défaut: 0),
  image: String,
  createdAt: Date (auto-généré)
}
```
