import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExpenseList />} />
        <Route path="/new" element={<ExpenseForm />} />
        <Route path="/edit/:id" element={<ExpenseForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;