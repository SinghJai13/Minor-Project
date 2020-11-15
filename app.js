const express = require("express");
const cookieParser = require('cookie-parser');
const multer = require('./config/multerSet');
const db = require('./config/mongoose');
const app = express();
const port = 8000;
// const spawn = require('child_process').spawn;

app.use(express.static('./assets'));

//Setting up parsers
app.use(express.urlencoded({
    extended: true
}));
// app.use(cookieParser());

//telling app to use routes
app.use('/', require('./routes/index'));

//setting view engine
app.set('view engine', 'ejs');
app.set('views', './views');


//make app listen to server
app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})