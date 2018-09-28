const express = require('express');
const jsonfile = require('jsonfile');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true,
}))
app.use(express.json());

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');


const FILE = 'data.json';

app.get ("/", (req, res) => {
  res.render("list");
})

const PORT = 3000;
app.listen(PORT);
console.log("Listening on port: " + PORT);

// clicking once checks an item
// clicking again removes the item

// unsorted items
// - a
// - b
// - c
// category 1
// - a
// - b
// - c
// cat 2
// - a
// - b
// - c
