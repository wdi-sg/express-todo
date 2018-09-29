const express = require('express');
const list = 'list.json'

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

// Get Home
app.get('/',(req,res)=>{
    res.render('home');
});

/*
Listen using Nodemon
*/
app.listen(3000, ()=> console.log('~~~~~~Tuned in to port 3000~~~~~~'));