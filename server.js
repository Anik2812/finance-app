const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const auth = require('./routes/auth');
const users = require('./routes/users');
const expenses = require('./routes/expenses');
const budgets = require('./routes/budgets');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/expenses', expenses);
app.use('/api/budgets', budgets);

// Test route for root path
app.get('/', (req, res) => {
  res.send('Finance App API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
