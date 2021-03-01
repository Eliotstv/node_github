const { request, urlencoded } = require('express');
let express = require('express');
let app = express();

app.use(express.urlencoded({extended:true}));



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


