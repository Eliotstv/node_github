let express = require('express');
let router = express.Router();

//je déclare la fonction to do
let todo = ["tondre la pelouse","sortir le chien","manger de la pizza"];

router.get('/todo',function(req,res) {
    res.render('todo.ejs',{listetodo: todo});
})

//mon body est utilisable
router.use(express.urlencoded());

//je push le todoItem dans la liste todo
router.post('/', (request,response) => {
    console.log(request.body);
    todo.push(request.body.todoItem);
    //response.send(request.body.todoItem + " est ajouté");
    response.redirect('/todo');
    
    
});

router.get('/todo/:i',(req, res) => {
    let i = req.params.i;
    todo.splice(i, 1);
    res.redirect('/todo');
});


module.exports = router;