const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const expenseRoutes = require('./routes/expenses');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/expenses', expenseRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, () =>
  console.log('MongoDB connected')
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));