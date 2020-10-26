const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const db = require('./config/mongoose');
const port = 8000;
// const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'));
// app.use(expressLayouts);
// app.set('layout extractStyles',true);
// app.set('layout extractScripts',true);

app.use(express.urlencoded());
CronJob.start();
app.use(cookieParser());

// telling app to use routes
app.use('/', require('./routes/index'));

//setting view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//make app listen to server
app.listen(port , function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})