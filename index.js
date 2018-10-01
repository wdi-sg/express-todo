const express = require('express')
const app = express();

const jsonfile = require('jsonfile');

//method override
const methodOverride = require('method-override')

app.use(methodOverride('_method'));

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));

const FILE = "todolist.json";

app.use(express.json());
app.use(express.urlencoded({
extended: true
}));


// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets handlebars to be the default view engine
app.set('view engine', 'jsx');

//=======post
app.post('/addlist',function(request,respone){

    //read file
    jsonfile.readFile(FILE,(err,obj)=>{
        //console.log("post",myList)
        // for (var i = 0; i < myList.length; i++){
            obj.mytask.task = request.body

           let myNewTask = {
                // id: newId
                task: request.body["task"],
            }


            obj["mytask"].push(myNewTask);
           //console.log( myList[i].id )
        // }

        jsonfile.writeFile("todolist.json",obj,(err)=>{
            console.log(err)
            console.log("POSTOBJ", obj["mytask"])

            // respone.render('myaddlist')
            respone.redirect('/')

        })

    })


})

//===========
app.get('/', function (request, respone) {

      console.log(request.body)

    jsonfile.readFile(FILE,(err, obj)=>{
        let myList = obj.mytask
        console.log(myList)
//home
        respone.render('home',myList);
    //respone.send('It good to be home');
    });


})

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'))