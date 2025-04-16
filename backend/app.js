const express = require('express');
const app = express();

const routes = require('./routes');
const middlewares = require('./middlewares');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger middleware
app.use(middlewares.logger);

// Routes
app.use('/users', routes.userRoute);
app.use('/products', routes.productRoute);
app.use('/orders', routes.orderRoute);
app.use('/categories', routes.categoryRoute);

// Simple route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to our backend!" });
});

// Error handling middleware
app.use(middlewares.errorHandler);

module.exports = app;
