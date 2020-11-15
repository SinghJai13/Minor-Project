const spawn = require('child_process');
const db = require('../config/mongoose')
const fs = require('fs');
//Rendering home
module.exports.home = function (req, res) {
    return res.render('home');
}

//passing data to model
module.exports.processing = function (req, res) {
    console.log(req.body);
    console.log(req.cookies.abc.name)
    // spawn new child process to call the python script
    const python = spawn('python', ['hello.py', req.body.age, req.body.gender, req.body.image]);
    // var data = req.body.gender;
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
    });

    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send(dataToSend)
    });
}


module.exports.up = function (req, res) {
    console.log(req.body);
    const tempPath = req.file.path;
    const dest = path.join(__dirname, "./uploads/image.jpg");
    res.send(req.file);
}


module.exports.photo = function (req, res) {
    console.log(req);
    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    // Define a JSONobject for the image attributes for saving to database

    var finalImg = {
        contentType: req.file.mimetype,
        image: new Buffer(encode_image, 'base64')
    };
    console.log(finalImg);
    // db.collection('quotes').insertOne(finalImg, (err, result) => {
    //     console.log(result)

    //     if (err) return console.log(err)

    //     console.log('saved to database')
    //     res.redirect('/')


    // })
}