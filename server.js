const { request } = require('express');
let express = require('express');
let app = express();


//je déclare la fonction to do
let todo = ["tondre la pelouse","sortir le chien","manger de la pizza"];


app.get('/todo',function(req,res) {
    res.render('todo.ejs',{listetodo: todo});
})

//mon body est utilisable
app.use(express.urlencoded());

//je push le todoItem dans la liste todo
app.post('/', (request,response) => {
    console.log(request.body);
    todo.push(request.body.todoItem);
    //response.send(request.body.todoItem + " est ajouté");
    response.redirect('/todo');
    
    
});

app.get('/todo/:i',(req, res) => {
    let i = req.params.i;
    todo.splice(i, 1);
    res.redirect('/todo');
});




 






//let routes = require('./mesroutes');
//app.use('/',routes);


 //nouvelle url donc app.get, avec ce chemin to do j'ai une fonction
 //j'envois la listetodo et je reprends la variable todo
// app.get('/todo',function(req,res){
  //   res.render('todo.ejs',{listetodo: todo});
 //});

 //envoyer le formulaire
 //app.get('/todo/form',function(req,res){
 //    res.render('todoform.ejs');
    
 //});



app.use(express.static('public'));

//launch server
app.listen(3000,function(){
    console.log('server is running on port 3000')
});


