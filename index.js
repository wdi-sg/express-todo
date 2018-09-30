
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










app.listen(3001, () => console.log('~~~ Tuning in to the waves of port 3001 ~~~'));








