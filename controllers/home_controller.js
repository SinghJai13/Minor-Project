module.exports.home = function (req, res) {

    // return res.redirect("/users/signin");
    return res.render('home');
}
module.exports.processing = function(req,res){
    console.log(req.body);
}