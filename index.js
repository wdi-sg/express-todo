const express = require('express');
const jsonfile = require('jsonfile');

const file = 'todo.json';

const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));


const reactEngine = require('express-react-views').createEngine();

app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.get('/todo/:action', (req, res) => {

  var add = [];

  add.push(req.params.action);


res.render('form', add);
});




app.post('/todo/add/results', (req, res) => {

     var newItem = req.body;

    console.log("new item:", newItem);


    jsonfile.readFile (file, function(err, obj) {

        let listObj = obj.list;
        listObj.push(newItem);



        jsonfile.writeFile(file, obj, function (err) {

            if (err) console.log("ERROR:",err);




         });

    res.render('results', obj);

    });

});

app.listen(3000, () => console.log('Listening to 3000!'));

