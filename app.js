var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const passport = require('passport')
require('dotenv').config()
const {Usuario} = require('./models')
const flash = require('connect-flash')

const indexRouter = require('./routes');

var app = express();

app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
  name: process.env.NAME,
}))

app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
    
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    Usuario.findByPk(id).then(function(user) { done(null, user); });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next) => {
  res.locals.alert = req.flash('alert')
  res.locals.success = req.flash('success')
  res.locals.user = req.user
  next()
})

app.use('/', indexRouter);

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

module.exports = app;
