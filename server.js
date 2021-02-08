const { request } = require('express');
let express = require('express');
let app = express();

//je déclare la fonction to do
let todo = ["tondre la pelouse","sortir le chien"];

//set route
app.get('/',(request,response) => {
   //response.send("Hello World");
    response.render('home.ejs',{name: "Paul"});
})

//nouvelle url donc app.get, avec ce chemin to do j'ai une fonction
//j'envois la listetodo et je reprends la variable todo
app.get('/todo',function(req,res){
    res.render('todo.ejs',{listetodo: todo});
});

//envoyer le formulaire
app.get('/todo/form',function(req,res){
    res.render('todoform.ejs');
    
});

//récupérer les inputs du formulaire
app.get('/todo/new',function(req,res){
    let item = req.query.todoItem;
    console.log(item);
    todo.push(item);
    res.redirect('/todo');

});
















//using url
app.get('/index', (request, response) => {
    //response.send('Bonjour ' + request.query.name);
    response.render('home.ejs',{name: request.query.name});
})

//using param
app.get('/index/:name', (request, response) => {
    //response.send('Bonjour ' + request.params.name);
    response.render('home.ejs',{name: request.params.name});
})

app.use(express.static('public'));

//launch server
app.listen(3000,function(){
    console.log('server is running on port 3000')
});


