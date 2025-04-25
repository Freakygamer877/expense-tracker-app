const mongoose = require('mongoose');
const ExpenseSchema = new mongoose.Schema({
  amount: Number,
  category: String,
  description: String,
  date: Date,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Expense', ExpenseSchema);