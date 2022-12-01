var express = require('express');
var router = express.Router();

/* GET Route for home page. */
router.get('/home', (req, res, next) => {
  res.render('home');
});

module.exports = router;