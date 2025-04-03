const express = require('express');
const connectDB = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const specs = require('./config/swagger');
const routes = require('./routes');
const youtubeInteractionService = require('./services/youtubeInteractionService');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Start YouTube interaction service
youtubeInteractionService();

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API docs available at http://localhost:${PORT}/api-docs`);
});