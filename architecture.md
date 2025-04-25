# Expense Tracker App Architecture

## Objective
Create a full-stack web application to track expenses, visualize spending patterns, and allow secure user access.

## Architecture Overview
- **Client:** React app for UI, routing, and chart visualization
- **Server:** Express.js API server for managing requests
- **Database:** MongoDB Atlas for storing expenses and user accounts
- **Authentication:** JWT for session management and protected routes

## Flow Diagram
```
User → React (Form) → Axios → Express API → MongoDB
     ← Charts (GET /expenses) ←
```

## Components & Responsibilities
### Frontend
- **ExpenseList.jsx** – Lists all user's expenses
- **ExpenseForm.jsx** – Add/Edit expense form
- **Dashboard.jsx** – Pie + Bar charts using Chart.js
- **Login/Register.jsx** – Auth forms

### Backend
- **/models/User.js** – User schema with email/password
- **/models/Expense.js** – Expense schema
- **/routes/auth.js** – Register & Login endpoints
- **/routes/expenses.js** – CRUD for expenses (protected)
- **server.js** – Main server file (Express setup)

## Authentication Flow
- On register/login, user gets JWT token
- Token is stored in localStorage and sent in `Authorization` header for protected routes
- Middleware validates token on server

## Visualization Logic
- **Pie Chart**: Category-wise distribution of expenses
- **Bar Chart**: Monthly expense totals (using date field)

## Future Enhancements
- Multi-user dashboard (comparison)
- Export data (CSV/PDF)
- PWA support for offline use
