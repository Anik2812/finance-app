const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Expense = require('../models/Expense');

// @route   GET api/expenses
// @desc    Get all expenses
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

// Add these routes to your existing expenses.js file

// GET api/expenses/:id
router.get('/:id', auth, async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) return res.status(404).json({ msg: 'Expense not found' });

    if (expense.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// @route   PUT api/expenses/:id
// @desc    Update an expense
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { description, amount, category } = req.body;

  try {
    let expense = await Expense.findById(req.params.id);

    if (!expense) return res.status(404).json({ msg: 'Expense not found' });

    // Make sure user owns expense
    if (expense.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    expense = await Expense.findByIdAndUpdate(
      req.params.id,
      { $set: { description, amount, category } },
      { new: true }
    );

    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/expenses/:id
// @desc    Delete an expense
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    console.log('Deleting expense with ID:', req.params.id);
    let expense = await Expense.findById(req.params.id);
    if (!expense) {
      console.log('Expense not found');
      return res.status(404).json({ msg: 'Expense not found' });
    }
    
    console.log('User ID from token:', req.user.id);
    console.log('Expense user ID:', expense.user.toString());
    
    // Make sure user owns expense
    if (expense.user.toString() !== req.user.id) {
      console.log('User not authorized to delete this expense');
      return res.status(401).json({ msg: 'Not authorized' });
    }
    
    await Expense.findByIdAndDelete(req.params.id);
    console.log('Expense successfully deleted');
    res.json({ msg: 'Expense removed' });
  } catch (err) {
    console.error('Error in delete expense route:', err);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/expenses
// @desc    Add new expense
// @access  Private
router.post('/', auth, async (req, res) => {
  const { description, amount, category } = req.body;

  try {
    const newExpense = new Expense({
      user: req.user.id,
      description,
      amount,
      category
    });

    const expense = await newExpense.save();
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;