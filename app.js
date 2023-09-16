const express = require('express');
const app = express();

const booksRoutes = require('./api/routes/books');
const ordersRoutes = require('./api/routes/orders');

app.use(express.json());
 
app.use('/api/v1/books', booksRoutes);
app.use('/api/v1/orders',ordersRoutes);

module.exports = app;