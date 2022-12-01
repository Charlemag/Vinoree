var express = require('express');
var router = express.Router();
const Wine = require('../models/Wine.model');
const Cheese = require('../models/Cheese.model')

/* GET Wine listing. */


router.get('/', (req, res, next) => {
  Wine.find()
  
  .then((foundWines) => {
    console.log("Here are Wines: ", foundWines)
      res.render('wines.hbs', {foundWines})
  })
  .catch((err) => {
      console.log(err)
  })
  })

router.get('/:id', async (req, res, next) => {

  Wine.findById(req.params.id)
  .then((foundWine) => {
      Cheese.find({id: foundWine.matches})
      .then((foundCheeses) => {
        foundCheeses.forEach((cheese)=> {
          cheese.wineId = foundWine._id
        })
        res.render("wine-detail.hbs", {wine: foundWine, cheeses: foundCheeses})
      })
      .catch((err) => {
        console.log(err)
      })
      // .finally(() => 
  })
  .catch((err) => {
    console.log(err)
  })


})  

  module.exports = router;
