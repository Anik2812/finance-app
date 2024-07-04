const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  category: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  period: {
    type: String,
    required: true,
    enum: ['weekly', 'monthly', 'yearly']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('budget', BudgetSchema);