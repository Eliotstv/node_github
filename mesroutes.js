let express = require('express');
let router = express.Router();

router.get('/',(req,res) => {
          res.render('form.ejs');
      })
    
router.post('/',(req,res) => {
         console.log(req.body);
         res.send("Hello " + req.body.myname);
    })

    // //set route
router.get('/',(request,response) => {
    //response.send("Hello World");
     response.render('home.ejs',{name: "Paul"});
 })

 //nouvelle url donc app.get, avec ce chemin to do j'ai une fonction
 //j'envois la listetodo et je reprends la variable todo
 router.get('/todo',function(req,res){
     res.render('todo.ejs',{listetodo: todo});
 });

//  //envoyer le formulaire
//  router.get('/todo/form',function(req,res){
//      res.render('todoform.ejs');
    
//  });

//  //récupérer les inputs du formulaire
//  router.get('/todo/new',function(req,res){
//      let item = req.query.todoItem;
//      console.log(item);
//      todo.push(item);
//      res.redirect('/todo');

//  });

//  module.exports = router;
