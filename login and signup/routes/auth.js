const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// Login routes
router.get('/login', (req, res) => {
  if (req.session.user) return res.redirect('/'); // Redirect to home if already logged in
  res.render('login', { error: null }); // Render the login page
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) return res.render('login', { error: 'Invalid email or password' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.render('login', { error: 'Invalid email or password' });

    req.session.user = user; // Store user in session
    res.redirect('/'); // Redirect to home after successful login
  } catch (error) {
    res.render('login', { error: 'An error occurred. Please try again.' });
  }
});

// Signup routes
router.get('/signup', (req, res) => {
  if (req.session.user) return res.redirect('/'); // Redirect to home if already logged in
  res.render('signup', { error: null }); // Render signup page
});

router.post('/signup', async (req, res) => {
  try {
    const { fullname, email, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.render('signup', { error: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });
    res.redirect('/login'); // Redirect to login after successful signup
  } catch (error) {
    res.render('signup', { error: 'An error occurred. Please try again.' });
  }
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(); // Destroy session
  res.redirect('/login'); // Redirect to login after logout
});

router.post('/signup', (req, res) => {
console.log (req.body); 

});

module.exports = router;