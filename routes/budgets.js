const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Budget = require('../models/Budget');

// @route   GET api/budgets
// @desc    Get all budgets
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const budgets = await Budget.find({ user: req.user.id }).sort({ date: -1 });
    res.json(budgets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/budgets
// @desc    Add new budget
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

// @route   PUT api/budgets/:id
// @desc    Update budget
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { category, amount, period } = req.body;

  try {
    let budget = await Budget.findById(req.params.id);

    if (!budget) return res.status(404).json({ msg: 'Budget not found' });

    // Make sure user owns budget
    if (budget.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    budget = await Budget.findByIdAndUpdate(
      req.params.id,
      { $set: { category, amount, period } },
      { new: true }
    );

    res.json(budget);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/budgets/:id
// @desc    Delete budget
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let budget = await Budget.findById(req.params.id);

    if (!budget) return res.status(404).json({ msg: 'Budget not found' });

    // Make sure user owns budget
    if (budget.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Budget.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Budget removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
