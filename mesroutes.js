let express = require('express');
let router = express.Router();

let userController = require('./controllers/userController');

router.get('/user', userController.userList);

router.get('/',(req,res) => res.redirect('/user'));

router.get('/user/show/:iduser', userController.userShow)

router.get('/user/remove/:iduser', userController.userRemove);

router.get('/user/add', userController.userFormAdd);

router.post('/user/new', userController.userNew);

router.post('/user/update', userController.userUpdate);

router.get('/user/update/:iduser', userController.userUpdate);

//je déclare la fonction to do
let todo = ["tondre la pelouse","sortir le chien","manger de la pizza"];

router.get('/todo',function(req,res) {
    res.render('todo.ejs',{listetodo: todo});
})
router.use(express.urlencoded({extended:true}));
//mon body est utilisable


//je push le todoItem dans la liste todo
router.post('/', (request,response) => {
    console.log(request.body);
    todo.push(request.body.todoItem);
    response.redirect('/todo');
    response.send(request.body.todoItem + " est ajouté");
    
    
    
});

router.get('/todo/:i',(req, res) => {
    let i = req.params.i;
    todo.splice(i, 1);
    res.redirect('/todo');
});




module.exports = router;