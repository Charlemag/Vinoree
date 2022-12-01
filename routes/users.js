var express = require('express');
const { TooManyRequests } = require('http-errors');
var router = express.Router();
const User = require('../models/User.model')

/* Post users data. */


router.post('/:cheeseId/:wineId/add-favorite', (req, res, next) => {
  console.log("Session", req.session.user)
  User.findByIdAndUpdate(req.session.user._id, {
    favoritePairing: {
      wine: req.params.wineId,
      cheese: req.params.cheeseId
    }
  }, 
  {new: true}
  )
  .then((updateUser) => {
  
    console.log("This is the updated User", updateUser)
    res.redirect('/user')
  })
  .catch((err) => {
    console.log(err)
  })
})

router.get('/', (req, res, next) => {
  User.findOne(req.session.user_id)
  .populate({
    path: 'favoritePairing.wine'
  })
  .populate({
    path: 'favoritePairing.cheese'
  })
  .then((foundUser) => {

    console.log("This is the found user", foundUser)
    res.render('profile.hbs', foundUser)
  })
  .catch((err) => {
    console.log(err)
  })
})

router.post('/delete-favorite', (req, res, next) => {
  User.findByIdAndUpdate(req.session.user._id, {
    favoritePairing: {
      wine: null,
      cheese: null
    }
  }, 
  {new: true})
  .then((user) => {
    console.log("user after deleting pairing", user)
    res.redirect('/user')
  })
  .catch((err) => {
    console.log(err)
  })
})

module.exports = router;
