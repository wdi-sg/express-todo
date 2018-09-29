const express = require('express');
const jsonfile = require('jsonfile');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
extended: true
}));

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

app.get('/default', (req, res) => {

    res.render('default')

})

app.get('/', (req, res) => {
    let html = "<html>";
    html += "<body>";
    html += '<form method="POST" action="/default1">';
    html += "What should you do today? <br>" ;
    html += '<input type="text" name="date"> <br>';
    html += '<input type="text" name="whatToDo"> <br>';
    html += '<input type="text" name="deadline"> <br>';
    html += '<input type="submit" value="Submit">';
    html += "</form>";
    html += "</body>";
    html += "</html>";
res.send( html );
});

app.post('/default1',(request, response) =>{

    let file = 'todo.json';

    const obj = request.body;

    jsonfile.writeFile(file, obj, function (err) {
      if (err) console.log("ERROR:",err)

    console.log(request.body)
    response.send(request.body);
    })
});

app.listen (3001);