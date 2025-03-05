const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('login'); // Login Page
});

app.get('/signup', (req, res) => {
  res.render('signup'); // Sign Up Page
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Basic validation
  if (username === 'admin' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.send('Invalid username or password.');
  }
});

app.post('/signup', (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;

  // Basic validation
  if (password === confirmPassword) {
    res.send('Sign up successful!');
  } else {
    res.send('Passwords do not match.');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

