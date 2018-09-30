//Getting packages
const express = require('express');
const app = express();

const jsonfile = require('jsonfile');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const reactEngine = require('express-react-views').createEngine();


//Settings for express engine
app.engine('jsx', reactEngine);

    // this tells express where to look for the view files
    app.set('views', __dirname + '/views');

    // this line sets react to be the default view engine
    app.set('view engine', 'jsx');

    app.get('/', (req, res) => {
      // running this will let express to run home.handlebars file in your views folder
      res.render('home')
    })


//Setting up some extra features
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static('public'))


//importing data files
const dataStorage = 'data_storage/data.json';


app.get( '/todo' , (request , response)=>{
    console.log("welcome to homepage")
    jsonfile.readFile(dataStorage , (err, obj)=> {


    response.render( 'home' , {listItem: obj});
    })
})


app.get( '/todo/additem' , (request , response)=>{
    jsonfile.readFile(dataStorage , (err, obj)=> {


    response.render( 'additem' , {listItem: obj});
    })
})


app.put('/todo/additem' , (request, response) =>{
    console.log(request.body)
    jsonfile.readFile(dataStorage , (err, obj)=> {

    obj["grocery"].push(request.body.item)


        jsonfile.writeFile( dataStorage , obj ,(err)=>{
                response.redirect("/todo")
        })

    });

})



app.delete('/todo/deleteItem/*' , (request, response) =>{
    let itemToDelete = request.path.split('/')[3]

    console.log(itemToDelete)


    jsonfile.readFile(dataStorage , (err, obj)=> {

        for (let i = 0; i < obj.grocery.length; i++){

            if (itemToDelete === obj.grocery[i]){

                obj.grocery.splice(i, 1);

            }
        }


        jsonfile.writeFile( dataStorage , obj ,(err)=>{
                console.log("redirecting")
                response.redirect("/todo")
        })

    });

})













app.listen(3000);