const { request, urlencoded } = require('express');
let express = require('express');
let app = express();

//bodyparser pour récupérer des variables
app.use(express.urlencoded({extended:true}));

var mysql = require("mysql");
//Database connection
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'users'
});
connection.connect(function(error){if (error) console.log(error);});

app.get('/user', (req,res) => {
    connection.query("select * from user;", function(error,result){
        if (error) console(error);
        res.render('userList.ejs',{users : result});
    })
})

app.get('/user/new',(req,res) => {
    res.render("userAdd.ejs");
});

//traiter derrière le bouton sauver du form add user
//sauver dans la DB le user
app.post('/user', (req,res) => {
    let user = {"lastname":req.body.lastname,"firstname":req.body.firstname};
    connection.query("INSERT INTO user SET ? ", user ,function(err,result){
        if (err) console.log(err);
        res.redirect('/user');
    }); 
});

//modifier un user
//send update form
app.get('/user/update/:i', (req,res) => {
    let i = req.params.i;
    //il faut aller chercher dans la DB les infos donc connection
    connection.query("select * from user WHERE iduser = ?;",i, function(error,result){
        if (error) console(error);
        res.render("userUpdate.ejs", {"iduser": result[0].iduser, "lastname": result[0].lastname, "firstname":result[0].firstname });
    })
});

//update user in DB
app.post('/user/update', (req,res)=> {
    let i = req.body.iduser;
    let user = {"lastname":req.body.lastname,"firstname":req.body.firstname};
    connection.query("UPDATE user SET ? WHERE iduser = ?", [user,i],function(err,result){
        if (err) console.log(err);
        res.redirect('/user');
    });

});

//delete d'un user
app.get('/user/delete/:i', (req,res) => {
    let i = req.params.i;
    //il faut aller chercher dans la DB les infos donc connection
    connection.query("DELETE from user WHERE iduser = ?;",i, function(error,result){
        if (error) console(error);
        res.redirect('/user');
    })
});

let routes = require('./mesroutes');
app.use('/', routes);



// app.get('/todo',function(req,res) {
//     res.render('todo.ejs',{listetodo: todo});
// })

// //mon body est utilisable
// app.use(express.urlencoded());

// //je push le todoItem dans la liste todo
// app.post('/', (request,response) => {
//     console.log(request.body);
//     todo.push(request.body.todoItem);
//     //response.send(request.body.todoItem + " est ajouté");
//     response.redirect('/todo');
    
    
// });

// app.get('/todo/:i',(req, res) => {
//     let i = req.params.i;
//     todo.splice(i, 1);
//     res.redirect('/todo');
// });







app.use(express.static('public'));

//launch server
app.listen(3000,function(){
    console.log('server is running on port 3000')
});


