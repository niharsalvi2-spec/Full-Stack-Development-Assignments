const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
    console.log('Connected to MongoDB (ecommerceDB)');
    await seedProducts();
})
.catch(err => console.error('MongoDB connection error:', err));

// Initial product seed
async function seedProducts() {
    const count = await Product.countDocuments();
    if(count === 0) {
        await Product.insertMany([
            { name: "Minimalist Watch", category: "Accessories", price: 195.00, imageClass: "product-1" },
            { name: "Wireless Earbuds", category: "Electronics", price: 129.00, imageClass: "product-2" },
            { name: "Urban Jacket", category: "Apparel", price: 249.00, imageClass: "product-3" },
            { name: "Classic Sneakers", category: "Footwear", price: 110.00, imageClass: "product-4" }
        ]);
        console.log("Seeded database with initial products.");
    }
}

// GET all products Endpoint
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Default fallback 
app.get('/', (req, res) => {
    res.send('Ecommerce API is running.');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
