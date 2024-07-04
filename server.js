const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const auth = require('./routes/auth');
const users = require('./routes/users');
const expenses = require('./routes/expenses');
const budgets = require('./routes/budgets');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', auth);  // Routes for authentication (login)
app.use('/api/users', users); // Routes for user management (registration)
app.use('/api/expenses', expenses);  // Routes for expense management
app.use('/api/budgets', budgets);    // Routes for budget management

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Test route for root path
app.get('/', (req, res) => {
  res.send('Finance App API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  // Fixed the console.log statement
