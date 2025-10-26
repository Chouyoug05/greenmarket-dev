/**
 * GreenMarket API - Serveur Principal
 * 
 * Application développée dans le cadre du devoir de Cloud Computing
 * Licence 3 - Développement Web
 * 
 * Fonctionnalités :
 * - API REST pour la gestion des produits bio
 * - Connexion à MongoDB Atlas
 * - Gestion des stocks et informations producteurs
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration des middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connexion à MongoDB
// J'utilise MongoDB Atlas en production, ou MongoDB local en développement
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/greenmarket', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connecté à MongoDB'))
.catch(err => console.error('❌ Erreur de connexion MongoDB:', err));

// Modèle de données pour les produits bio
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  producer: { type: String, required: true },
  origin: { type: String, required: true },
  organic: { type: Boolean, default: true },
  stock: { type: Number, default: 0 },
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

// === ROUTES DE MON API ===

// Route d'accueil
app.get('/', (req, res) => {
  res.json({
    message: '🌱 Bienvenue sur l\'API GreenMarket',
    description: 'Plateforme de vente de produits bio en circuit court',
    version: '1.0.0',
    endpoints: {
      products: '/api/products',
      health: '/api/health'
    }
  });
});

// Route de santé
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

// Routes pour les produits
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des produits',
      error: error.message
    });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({
      success: true,
      message: 'Produit créé avec succès',
      data: product
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Erreur lors de la création du produit',
      error: error.message
    });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Produit non trouvé'
      });
    }
    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération du produit',
      error: error.message
    });
  }
});

// Route pour initialiser des données de test
app.post('/api/seed', async (req, res) => {
  try {
    // Supprimer les produits existants
    await Product.deleteMany({});
    
    // Créer des produits de test
    const sampleProducts = [
      {
        name: 'Tomates Bio',
        description: 'Tomates cerises biologiques cultivées localement',
        price: 4.50,
        category: 'Légumes',
        producer: 'Ferme du Val Vert',
        origin: 'Région parisienne',
        organic: true,
        stock: 25,
        image: 'https://images.unsplash.com/photo-1592924357228-91b4e4a8b1c7?w=300'
      },
      {
        name: 'Miel de Lavande',
        description: 'Miel artisanal de lavande des Alpes',
        price: 12.00,
        category: 'Produits de la ruche',
        producer: 'Les Abeilles du Sud',
        origin: 'Provence',
        organic: true,
        stock: 15,
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300'
      },
      {
        name: 'Pain Complet',
        description: 'Pain complet au levain naturel',
        price: 3.20,
        category: 'Boulangerie',
        producer: 'Boulangerie Artisanale',
        origin: 'Centre de la France',
        organic: true,
        stock: 8,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300'
      }
    ];
    
    const products = await Product.insertMany(sampleProducts);
    
    res.json({
      success: true,
      message: 'Données de test initialisées',
      count: products.length,
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'initialisation des données',
      error: error.message
    });
  }
});

// Gestion des erreurs 404
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route non trouvée'
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur GreenMarket démarré sur le port ${PORT}`);
  console.log(`📱 API disponible sur: http://localhost:${PORT}`);
  console.log(`🌱 Endpoints disponibles:`);
  console.log(`   - GET  /api/products`);
  console.log(`   - POST /api/products`);
  console.log(`   - GET  /api/products/:id`);
  console.log(`   - POST /api/seed (pour initialiser les données)`);
});
