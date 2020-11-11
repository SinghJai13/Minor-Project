const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();

const port = 8000;

// const spawn = require('child_process').spawn;


app.use(express.static('./assets'));

app.use(express.urlencoded());

app.use(cookieParser());

//telling app to use routes
app.use('/', require('./routes/index'));

//setting view engine
app.set('view engine', 'ejs');
app.set('views', './views');
// var multer = require('multer');
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());

//make app listen to server
app.listen(port , function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})


