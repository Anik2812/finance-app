# 💸 FinTrack: Your Personal Finance Companion

<div align="center">
  <img src="https://github.com/user-attachments/assets/1c720fdd-339a-4eb9-8112-e140feb3f169" alt="FinTrack Logo" width="200"/>
</div>
  
## 🌟 Welcome to FinTrack

FinTrack is a sophisticated, user-friendly finance management application designed to empower you in taking control of your financial life. With its sleek dark-themed interface and robust feature set, FinTrack transforms budgeting and expense tracking from a chore into an engaging and insightful experience.


## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Getting Started](#-getting-started)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Architecture](#-architecture)
- [API Documentation](#-api-documentation)
- [Main Components](#%EF%B8%8F-main-components)


## ✨ Features

FinTrack offers a comprehensive suite of features to manage your finances effectively:

- 📊 **Interactive Dashboard**: 
  - Get a bird's-eye view of your financial health
  - Real-time updates on spending patterns and budget status
  - Customizable widgets for personalized financial insights

- 💰 **Smart Expense Tracking**: 
  - Effortlessly log and categorize expenses
  - Automatic categorization using machine learning algorithms
  - Attach receipts and notes to expenses for detailed record-keeping

- 🎯 **Dynamic Budgeting**: 
  - Set and manage budgets for various spending categories
  - Receive alerts when approaching or exceeding budget limits
  - Adjust budgets on-the-fly based on spending habits or income changes

- 📈 **Advanced Visualizations**: 
  - Interactive charts and graphs to understand spending patterns
  - Trend analysis to forecast future expenses
  - Customizable reports for deep financial insights

- 🌙 **Eye-Friendly Dark Mode**: 
  - Reduce eye strain during late-night financial planning sessions
  - Seamlessly switch between light and dark themes

- 🔐 **Bank-Grade Security**: 
  - End-to-end encryption for all financial data
  - Two-factor authentication (2FA) for enhanced account protection
  - Regular security audits and compliance with financial data regulations

- 📱 **Cross-Platform Synchronization**: 
  - Access your financial data seamlessly across devices
  - Real-time syncing ensures your information is always up-to-date

- 🤖 **AI-Powered Insights**: 
  - Receive personalized financial advice based on your spending habits
  - Predictive analysis to help you make informed financial decisions


## 🚀 Getting Started

Follow these steps to get FinTrack up and running on your local machine:

1. **Clone the repository:**
   `git clone https://github.com/Anik2812/finance-app.git`

2. **Install dependencies:**
   `cd fintrack
    npm install`

3. **Set up your environment variables:**
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```
    
4. **Start the server:**
   `npm run server`

5. **In a new terminal, start the client:**
   `npm run client`

6. Visit `http://localhost:3000` in your browser and start managing your finances!


## 🛠️ Tech Stack
FinTrack leverages a modern and robust tech stack:

* Frontend:

  * React 17.0.2
  * Material-UI 5.0.0
  * Redux for state management
  * React Router for navigation
  * Chart.js for data visualization


* Backend:

  * Node.js 14.x
  * Express 4.17.1
  * MongoDB with Mongoose ODM
  * JSON Web Tokens (JWT) for authentication


* DevOps & Tools:

  * Docker for containerization
  * Jest and React Testing Library for testing
  * ESLint and Prettier for code quality
  * GitHub Actions for CI/CD


## 🏗 Architecture
FinTrack follows a modular architecture for scalability and maintainability:

## Client Directory

- **public/**: Contains public assets for the frontend.
- **src/**:
  - **components/**: Reusable UI components.
  - **pages/**: Main application pages.
  - **redux/**: Redux store and slices.
  - **services/**: API service layer.
  - **utils/**: Utility functions.

## Server Directory

- **config/**: Configuration files.
- **controllers/**: Request handlers.
- **middleware/**: Custom middleware.
- **models/**: Mongoose models.
- **routes/**: API routes.
- **utils/**: Server utilities.

## Other Directories

- **tests/**: Test suites.

## Root Files

- **docker-compose.yml**: Docker composition file.


# 📚 API Documentation

FinTrack's backend API is organized into the following routes:

## Authentication

- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Authenticate a user
- **GET /api/auth/me**: Get current user information

## Users

- **GET /api/users/:id**: Retrieve user details
- **PUT /api/users/:id**: Update user information
- **DELETE /api/users/:id**: Delete a user account

## Expenses

- **GET /api/expenses**: List all expenses
- **POST /api/expenses**: Create a new expense
- **GET /api/expenses/:id**: Retrieve a specific expense
- **PUT /api/expenses/:id**: Update an expense
- **DELETE /api/expenses/:id**: Delete an expense

## Budgets

- **GET /api/budgets**: List all budgets
- **POST /api/budgets**: Create a new budget
- **GET /api/budgets/:id**: Retrieve a specific budget
- **PUT /api/budgets/:id**: Update a budget
- **DELETE /api/budgets/:id**: Delete a budget


---

<div align="center">
  Made by Anik
</div>
