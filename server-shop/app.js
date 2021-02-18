var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const normalizePort = require('normalize-port');
const firmaJson = require('./middleware/firma_autor');
require('dotenv').config();
var busquedaRouter = require('./routes/busqueda');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var app = express();
var port = normalizePort(process.env.PORT || '3000');


var corsOptions = {
  origin: process.env.CORS_ALLOW,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions), function (req, res, next) {
 next()
})

app.set('port', port);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(firmaJson)
app.use('/api', busquedaRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});



// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
