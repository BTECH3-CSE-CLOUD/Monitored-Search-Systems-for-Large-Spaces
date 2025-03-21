const express = require('express');
const router = express.Router();

// Root route
router.get('/', (req, res) => {
  if (req.session.user) {
    res.send('Welcome to the home page!'); // Render a simple home page for logged-in users
  } else {
    res.redirect('/login'); // Redirect to login if not logged in
  }
});


module.exports = router;