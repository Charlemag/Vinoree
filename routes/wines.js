var express = require('express');
var router = express.Router();

/* GET Wine listing. */
router.get('/', (req, res, next) => {
  res.render('wines');
});

module.exports = router;