var express = require('express');
var router = express.Router();
const Cheese = require('../models/Cheese.model');
const Wine = require('../models/Wine.model')
/* GET Cheese listing. */

router.get('/', (req, res, next) => {
  Cheese.find()
  .then((foundCheese) => {
    console.log("Here are Cheeses: ", foundCheese)
      res.render('cheese.hbs', {foundCheese})
  })
  .catch((err) => {
      console.log(err)
  })
  
  })

  router.get('/:id', async (req, res, next) => {

    Cheese.findById(req.params.id)
    .then((foundCheese) => {

        Wine.find({id: foundCheese.matches})
        .then((foundWines) => {

          foundWines.forEach((wine)=> {
            wine.cheeseId = foundCheese._id
          })
          console.log("these are the found wines", foundWines)
          res.render("cheese-details.hbs", {cheese: foundCheese, wines: foundWines})
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
  

// router.post('/:id/delete-room', isOwner, (req, res, next) => {
//   Room.findById(req.params.id)
//       .then((foundRoom) => {
//           foundRoom.delete()
//           res.redirect('/rooms/rooms-list')
//       })
//       .catch((err) => {
//           console.log(err)
//       })
// });

module.exports = router;