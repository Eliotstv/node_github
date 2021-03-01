let User = require('../models/userModel');

let userList = [];

exports.userList = function(req,res) {
    //let user = new User("Steuve","Eliot");
    //userList.push(user);
    res.render('userList.ejs',{users : userList});
}

exports.userFormAdd = function(req,res) {
res.render('userAdd.ejs',{iduser :'-1', lastname:"", firstname:""});
}

exports.userNew = function(req,res) {
    let iduser = req.body.iduser;
    let lastname = req.body.lastname;
    let firstname = req.body.firstname;

    let user = new User("lastname","firstname");
    userList.push(user);

    res.redirect('/user');
}