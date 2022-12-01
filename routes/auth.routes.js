var express = require('express');
var router = express.Router();

const User = require('../models/User.model')
const bcryptjs = require("bcryptjs");
const saltRounds = 10



router.get('/', (req, res, next) => {
    res.render('/signup')

})

router.post('/signup', (req, res, next) => {


if (!req.body.name || !req.body.email || !req.body.password)
    {
        console.log("ISSUE WITH FORM", req.body.name, req.body.email, req.body.password)
        res.render('/signup', {message: "Sign up here!"})
        return;
    }

    const salt = bcryptjs.genSaltSync(saltRounds)
    const hashedPass = bcryptjs.hashSync(req.body.password, salt)


    User.findOne({email: req.body.email})
        .then((foundUser) => {
            if (foundUser){
                console.log("WE'VE FOUND A USER")
            res.render('/signup', {message: "You're already signed up"})
            return
        } else {
                User.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hashedPass
                })
                .then((createdUser) => {
                    console.log("This is the created user:", createdUser)
                    res.redirect('/')
                })
                .catch((err) => {
                    console.log("ERROR ON LINE 46", err)
                })
            }
        })
        .catch((err) => {
            console.log("ERROR ON LINE 51", err)
        })
})

router.get('/login', (req, res, next) => {
    res.render('login.hbs')
})

router.post('/login', (req, res, next) => {

    if (!req.body.email|| !req.body.password) {
        res.render('login.hbs', {message : "Both fields are required"})
        return;
    } 
    
    User.findOne({email: req.body.email})
    .then((foundUser) => {
        if (!foundUser) {
            res.render('login.hbs', {message: "This User does not exist"})
        } else {
            let correctPassword = bcryptjs.compareSync(req.body.password, foundUser.password);
            if(correctPassword) {
                req.session.user = foundUser;
                res.redirect('/')
            } else {
                res.render('login.hbs', {message: "Incorrect Password or Email"})
            }
        }
    })    
})

//Logout Route
// router.get('/logout', (req, res, next) => {
// req.session.destroy()
// res.resdirect('/index/login')
// })

module.exports = router
