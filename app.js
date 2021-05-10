var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');

const port = process.env.PORT || "8000";

var app = express();

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/index.html");

});

app.post('/', function(req, res) {
    console.log("request: ", req.body);
    res.send("Successfully Submitted. Please continue to next section");
});

app.get('/section-a', function(req, res) {
    res.sendFile(__dirname + "/views/section-a.html");
});

app.get('/section-b', function(req, res) {
    res.sendFile(__dirname + "/views/section-b.html");
});

app.get('/scanner', function(req, res) {
    res.sendFile(__dirname + "/views/scanner.html");
});


// app.get('/process_get', function(req, res) {
//     // Prepare output in JSON format
//     response = {
//         first_name: req.query.first_name,
//         last_name: req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// });

var server = app.listen(port, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})



// // core dependencies
// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// // create route objectsvar indexRouter = require('./routes/index');var aboutRouter = require('./routes/about');var contactRouter = require('./routes/contact');var tipsRouter = require('./routes/tips');var recipesRouter = require('./routes/recipes');var adviceRouter = require('./routes/advice');
// // the app object
// var app = express();
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');
// // app config
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// // tell the app to use these routesapp.use('/', indexRouter);app.use('/about', aboutRouter);app.use('/contact', contactRouter);app.use('/tips', tipsRouter);app.use('/recipes', recipesRouter);app.use('/advice', adviceRouter);
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
// });
// // error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });
// // expose this app to scripts that require it, i.e. myapp/bin/www
// module.exports = app;



// // // index.js

// // /**
// //  * Required External Modules
// //  */

// // const express = require("express");
// // const path = require("path");

// // /**
// //  * App Variables
// //  */

// // const app = express();
// // const port = process.env.PORT || "8000";

// // /**
// //  *  App Configuration
// //  */

// // /**
// //  * Routes Definitions
// //  */

// // app.get("/", (req, res) => {
// //     res.sendFile(path.join(__dirname, 'views/index.html'));
// // });

// // app.get("/section-a", (req, res) => {
// //     res.sendFile(path.join(__dirname, 'views/section-a.html'));
// // });

// // app.get("/section-b", (req, res) => {
// //     res.sendFile(path.join(__dirname, 'views/section-b.html'));
// // });


// // /**
// //  * Server Activation
// //  */

// // app.listen(port, () => {
// //     console.log(`Listening to requests on http://localhost:${port}`);
// // });