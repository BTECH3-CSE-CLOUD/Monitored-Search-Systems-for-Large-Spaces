require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth');
const homeRoutes = require('./routes/home'); // Import home routes

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
sequelize.sync()
  .then(() => console.log('Database connected and synced'))
  .catch(err => console.error('Database connection error:', err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, // Set to true in production with HTTPS
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// View engine setup
app.set('views', path.join(__dirname, 'views')); // Set the views directory
app.set('view engine', 'ejs'); // Set EJS as the view engine

// Debugging: Log the views directory path
console.log('Views directory:', path.join(__dirname, 'views'));

// Mount routes
app.use('/', homeRoutes); // Mount home routes
app.use('/', authRoutes); // Mount auth routes

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});