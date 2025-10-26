/**
 * Script de test pour l'API GreenMarket
 * Pour tester l'API sans front-end
 */

const http = require('http');

// Configuration
const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';
const API_URL = `${BASE_URL}/api`;

// Fonctions de test
function makeRequest(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    
    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      
      res.on('data', (chunk) => {
        body += chunk;
      });
      
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

// Tests
async function runTests() {
  console.log('🧪 ===========================');
  console.log('🧪 Tests de l\'API GreenMarket');
  console.log('🧪 ===========================\n');

  try {
    // Test 1: Health Check
    console.log('📡 Test 1: Vérification de santé (GET /api/health)');
    const healthResult = await makeRequest('GET', API_URL + '/health');
    console.log(`   ✓ Status: ${healthResult.status}`);
    console.log(`   ✓ Réponse:`, healthResult.data);
    console.log();

    // Test 2: Liste des produits (initialement vide)
    console.log('📦 Test 2: Liste des produits (GET /api/products)');
    const productsList = await makeRequest('GET', API_URL + '/products');
    console.log(`   ✓ Status: ${productsList.status}`);
    console.log(`   ✓ Nombre de produits: ${productsList.data.count || 0}`);
    console.log();

    // Test 3: Créer un produit
    console.log('✏️  Test 3: Création d\'un produit (POST /api/products)');
    const newProduct = {
      name: 'Carottes Bio',
      description: 'Carottes biologiques fraîches du jardin',
      price: 2.50,
      category: 'Légumes',
      producer: 'Ferme Bio de Normandie',
      origin: 'Normandie',
      organic: true,
      stock: 30
    };
    
    const createdProduct = await makeRequest('POST', API_URL + '/products', newProduct);
    console.log(`   ✓ Status: ${createdProduct.status}`);
    console.log(`   ✓ Produit créé:`, createdProduct.data);
    console.log();

    // Test 4: Lister les produits après création
    console.log('📦 Test 4: Liste après création (GET /api/products)');
    const productsAfterCreate = await makeRequest('GET', API_URL + '/products');
    console.log(`   ✓ Status: ${productsAfterCreate.status}`);
    console.log(`   ✓ Nombre de produits: ${productsAfterCreate.data.count}`);
    if (productsAfterCreate.data.data && productsAfterCreate.data.data.length > 0) {
      console.log(`   ✓ Premier produit: ${productsAfterCreate.data.data[0].name}`);
    }
    console.log();

    // Test 5: Récupérer un produit par ID
    if (createdProduct.data && createdProduct.data.data && createdProduct.data.data._id) {
      const productId = createdProduct.data.data._id;
      console.log(`🔍 Test 5: Récupérer un produit par ID (GET /api/products/${productId})`);
      const productById = await makeRequest('GET', API_URL + '/products/' + productId);
      console.log(`   ✓ Status: ${productById.status}`);
      console.log(`   ✓ Produit trouvé: ${productById.data.data.name}`);
      console.log();
    }

    // Test 6: Initialiser les données de test
    console.log('🌱 Test 6: Initialiser les données de test (POST /api/seed)');
    const seedResult = await makeRequest('POST', API_URL + '/seed');
    console.log(`   ✓ Status: ${seedResult.status}`);
    console.log(`   ✓ Produits créés: ${seedResult.data.count || 0}`);
    console.log();

    // Test 7: Vérifier tous les produits après seed
    console.log('📦 Test 7: Liste finale des produits (GET /api/products)');
    const finalProducts = await makeRequest('GET', API_URL + '/products');
    console.log(`   ✓ Status: ${finalProducts.status}`);
    console.log(`   ✓ Nombre total de produits: ${finalProducts.data.count}`);
    
    if (finalProducts.data.data && finalProducts.data.data.length > 0) {
      console.log('\n   ✓ Liste des produits:');
      finalProducts.data.data.forEach((product, index) => {
        console.log(`      ${index + 1}. ${product.name} - ${product.price}€ (Stock: ${product.stock})`);
      });
    }
    console.log();

    console.log('✅ ===========================');
    console.log('✅ Tous les tests ont réussi!');
    console.log('✅ ===========================');
    console.log('\n💡 Pour tester manuellement, utilisez:');
    console.log(`   curl ${BASE_URL}/api/products`);
    console.log(`   curl ${BASE_URL}/api/health`);

  } catch (error) {
    console.error('❌ Erreur lors des tests:', error.message);
    process.exit(1);
  }
}

// Démarrer les tests
runTests();
