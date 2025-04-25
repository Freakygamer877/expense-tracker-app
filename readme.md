# Expense Tracker App

A full-stack expense tracking application built with React, Node.js, Express, and MongoDB. Includes data visualization, JWT authentication, and RESTful API.

## Features
- Add, edit, delete expenses
- Visualize expenses by category and month
- JWT authentication (bonus)
- Responsive and user-friendly UI
- Fully RESTful backend API

## Tech Stack
- **Frontend:** React, Chart.js, React Router, Axios
- **Backend:** Node.js, Express.js, MongoDB, JWT, Mongoose
- **Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas (database)

## Project Structure
```
/expense-tracker
├── backend         # Express + MongoDB + Auth
│   ├── models
│   ├── routes
│   └── server.js
├── frontend        # React + Chart.js
│   ├── src
│   └── public
├── README.md       # Project instructions
└── architecture.md # Design & flow documentation
```

## Setup Instructions
### 1. Backend (Node.js + Express)
```bash
cd backend
npm install
cp .env.example .env  # create your .env file
# Add MONGO_URI and JWT_SECRET
npm run dev
```

### 2. Frontend (React)
```bash
cd frontend
npm install
npm start
```

### 3. Environment Variables
Create `.env` in `/backend` with:
```
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
```

### 4. MongoDB Atlas Setup
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free cluster
3. Add a new **Database User** with username & password
4. Click **Connect > Connect your application**
5. Copy the URI, replace `<username>`, `<password>`, `<dbname>` appropriately
6. Paste into `.env` as `MONGO_URI`

### 5. Deployment
#### Backend (Render)
1. Push code to GitHub
2. Go to [Render](https://render.com)
3. New Web Service → Connect GitHub repo
4. Set:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Environment:** Add `MONGO_URI` and `JWT_SECRET`

#### Frontend
1. Push frontend to GitHub
2. Go to [Vercel](https://vercel.com)
3. New Project → Import GitHub
4. Root directory = `frontend`
5. Vercel auto-deploys

## API Routes
| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| POST   | /api/auth/register | Register new user       |
| POST   | /api/auth/login    | Login + get JWT         |
| GET    | /api/expenses      | Get user's expenses     |
| POST   | /api/expenses      | Add new expense         |
| PUT    | /api/expenses/:id  | Update an expense       |
| DELETE | /api/expenses/:id  | Delete an expense       |
