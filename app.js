const express = require('express')
const app = express()
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes.js');

dotenv.config();

app.use(express.json());

app.use('/api', productRoutes);

module.exports = app;