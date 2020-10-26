module.exports.home = function (req, res) {

    // return res.redirect("/users/signin");
    return res.render('home', {
        title: "home"
    });
}