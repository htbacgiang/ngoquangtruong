
const express = require("express");
const bodyParser = require("body-parser");
const viewEngine = require("./config/viewEngine.js");
const initWebRoutes = require("./route/web.js");
const connectDB = require("./config/connectDB.js");

require('dotenv').config();

let app = express();

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://truongnq.vn');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
  
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 8888;
//Port === undefined => port = 2701

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on the port : " + port)
})
module.exports = {
    "apps": [{
        "name": "MyApp",
        "script": "./server.js"
    }]
}