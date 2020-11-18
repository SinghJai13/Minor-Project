const {
    spawn
} = require('child_process');
const db = require('../config/mongoose')
const fs = require('fs');
var {PythonShell} = require('python-shell');

//Rendering home
module.exports.home = function (req, res) {
    return res.render('home');
}

//passing data to model
module.exports.processing = function (req, res) {
    // spawn new child process to call the python script
    console.log(req.file.fieldname)
    const python = spawn('python', ['hello.py', req.body.age, req.body.gender, req.file.filename]);

    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
    });
python.on('exit', function (code) {
            console.log("Exited with code " + code);
        });

        python.stderr.on('data', (data) => {
            //Here data is of type buffer
            console.log(data.toString())
        })

    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        console.log(dataToSend);

        const python2 = spawn('python', ['./Face_model/main.py']);

        python2.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
        });

        python2.on('exit', function (code) {
            console.log("Exited with code " + code);
        });

        python2.stderr.on('data', (data) => {
            //Here data is of type buffer
            console.log(data.toString())
            

        })


        python2.on('close', (code) => {
            console.log(`child process close all stdio with code ${code}`);
            // send data to browser
            console.log(dataToSend)
            return res.redirect('/result?gen=' + req.body.gender);

        });

    });

}

module.exports.results = function(req, res){
    console.log(req.query.gen);
    res.render('result.ejs', { gend: req.query.gen });
}
// module.exports.processing = function (req, res) {

//     var options = {
//         mode: 'text',
//         pythonPath: 'path/to/python',
//         pythonOptions: ['-u'],
//         scriptPath: 'path/to/my/scripts',
//         args: ['value1', 'value2', 'value3']
//       };

//     PythonShell.run('hello.py',{args:[req.body.age, req.body.gender, req.file.filename]}, function (err,results) {
//         if (err) console.log( err);
//         console.log('finished');
//         console.log(results);
//     });
// }
/* module.exports.photo = function (req, res) {
     var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    // Define a JSONobject for the image attributes for saving to database

    var finalImg = {
        contentType: req.file.mimetype,
        image: new Buffer(encode_image, 'base64')
    };

    db.collection('quotes').insertOne(finalImg, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')
    })
}*/