var express = require('express');
var router = express.Router();

/* GET Route for Index page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
