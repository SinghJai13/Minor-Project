const {spawn} = require('child_process');

//Rendering home
module.exports.home = function (req, res) {
    return res.render('home');
}

//passing data to model
module.exports.processing = function(req,res){
    console.log(req.body);
    
    // spawn new child process to call the python script
    const python = spawn('python', ['hello.py',req.body.age, req.body.gender, req.body.image]);
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