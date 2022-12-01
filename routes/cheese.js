var express = require('express');
var router = express.Router();

/* GET Cheese listing. */
router.get('/', (req, res, next) => {
  res.render('cheese');
});

module.exports = router;