var express = require('express')
var app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DeTourFood',
    { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:3000");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


var session = require('express-session');
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));


console.log("Server Started");

<<<<<<< 406ee780b7f53dbd5c9844352fb1d38950e0fc2c
var menuService = require('./services/menu.service.server');
menuService(app);
=======
var orderService = require('./services/order.service.server');
orderService(app);
>>>>>>> order schema, service and model files added

var restaurantService = require('./services/restaurant.service.server');
restaurantService(app);

var userService = require('./services/user.service.server');
userService(app);


app.listen(4000,function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});