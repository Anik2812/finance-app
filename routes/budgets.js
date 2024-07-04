const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Budget = require('../models/Budget');

// @route   POST api/budgets
// @desc    Create a new budget
// @access  Private
router.post('/', auth, async (req, res) => {
  const { category, amount, period } = req.body;

  try {
    const newBudget = new Budget({
      user: req.user.id,
      category,
      amount,
      period
    });

    const budget = await newBudget.save();
    res.json(budget);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/budgets
// @desc    Get all budgets for a user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const budgets = await Budget.find({ user: req.user.id });
    res.json(budgets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;