const express = require('express');
const jwt = require('jsonwebtoken');
const Expense = require('/models/expenses');
const router = express.Router();

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.user = decoded;
    next();
  });
};

router.use(authenticate);

router.post('/', async (req, res) => {
  const expense = new Expense({ ...req.body, userId: req.user.id });
  await expense.save();
  res.status(201).json(expense);
});

router.get('/', async (req, res) => {
  const expenses = await Expense.find({ userId: req.user.id });
  res.json(expenses);
});

router.put('/:id', async (req, res) => {
  const expense = await Expense.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body,
    { new: true }
  );
  res.json(expense);
});

router.delete('/:id', async (req, res) => {
  await Expense.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.sendStatus(204);
});

module.exports = router;