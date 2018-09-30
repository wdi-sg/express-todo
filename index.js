const express = require('express');
const jsonfile=require('jsonfile');
const timestamp = require('time-stamp');
const nanoid = require('nanoid')
const todoList = 'todolist.json'

function number(){
    for(var i = 0; i< 1000 ; i++){
        i + 1
    }
}

/*
EXPRESS
*/

//Init express app
const app = express() ; 

//Use Express module
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

/*
REACT
*/
//set layout to express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx',reactEngine);
//show express where to look for files
app.set('views',__dirname + '/views');
//set handlebars to be default view engine
app.set('view engine', 'jsx');

/*
ROUTES
*/

//GET Home
app.get('/',(req,res)=>{
    jsonfile.readFile(todoList,(err,obj)=>{
        res.render('home');
    });
});

//POST List
app.post('/list',(req,res) =>{
    jsonfile.readFile (todoList , (err, obj) =>{
        let listObject = obj['item'];

        let newItem = {
            id: nanoid(3),
            task: req.body.task,
            dateTime:timestamp.utc('mm:ss YYYY/MM/DD/')
        }
    
        listObject.push(newItem)

        jsonfile.writeFile(todoList , obj , err => {
            console.log(err);
            res.send(req.body)
        })
        res.render('new' ,{listArr: obj['item']} );
    })
})

//Get to Edit post
app.get('/:id/edit' ,(req,res)=>{
    jsonfile.readFile(todoList,(err,obj)=>{
        let listObject = obj['item']
        let request = req.params.id
        console.log(req.params.id)

        for(i in listObject){
            if (listObject[i].id == request){
                var foundRequest = listObject[i]
            }
        }
        if (foundRequest){
            res.render('edit', {item:foundRequest})
        }
        else{
            res.render('invalid')
        }
        })
})





/*
Listen using Nodemon
*/
app.listen(3000, ()=> console.log('~~~~~~Tuned in to port 3000~~~~~~'));