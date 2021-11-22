module.exports = {
    home: (req,res) => {
        res.render('home');
    },
    about: (req, res) => {
       return res.render('about');
    }

}