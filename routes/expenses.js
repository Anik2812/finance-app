const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Expense = require('../models/Expense');

// @route   POST api/expenses
// @desc    Add new expense
// @access  Private
router.post('/', auth, async (req, res) => {
  const { amount, category, date, description } = req.body;

  try {
    const newExpense = new Expense({
      user: req.user.id,
      amount,
      category,
      date,
      description
    });

    const expense = await newExpense.save();
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/expenses
// @desc    Get all expenses for a user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;