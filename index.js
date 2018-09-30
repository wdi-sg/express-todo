
const express = require('express');
const app = express();

const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');

const methodOverride = require('method-override')
app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const jsonfile = require('jsonfile');

const fileNew = 'listObject_new.json';
const file = 'listObject.json';

app.use(express.static('public'));


app.get ('/', (request, response) => {

    console.log("Requesting root...");

    jsonfile.readFile(file, (err, obj) => {

        return response.render('views_root', obj);

    });
});


app.post ('/', (request, response) => {

    jsonfile.readFile (file, (err, obj) => {

        if (err) {console.log(err);};

        if (Object.keys(obj).length === 0) {

            obj = {'entries': []}
        };

        request.body['submissionTime'] = new Date(new Date());

        console.log("New entry: ", request.body);

        obj.entries.push (request.body);

        jsonfile.writeFile (file, obj, (err) => {

            if (err) {console.log(err);};

            return response.redirect('/');

        });
    });
});







app.listen(3001, () => console.log('~~~ Tuning in to the waves of port 3001 ~~~'));








