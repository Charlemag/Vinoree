var createError = require('http-errors');
var express = require('express');
var hbs = require("hbs");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var app = express();

require("./config/session.config")(app);

require('dotenv/config');

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Routes: URL Location
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth.routes');
var cheeseRouter = require('./routes/cheese');
var wineRouter = require('./routes/wines');
var usersRouter = require('./routes/users')


//Declaring the variable: 
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/cheese', cheeseRouter);
app.use('/wine', wineRouter)
app.use('/user', usersRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

module.exports = app;
