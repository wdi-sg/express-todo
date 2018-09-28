const express = require('express');
const jsonfile = require('jsonfile');

const app = express();
const PORT = process.env.PORT || 8080;
const FILE = 'data.json';

app.set('views', `${__dirname}/views`);
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/tasks/new', (req, res) => {
  res.render('add_task');
});

app.get('/', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) console.error(err);
    else if (obj.tasks.length === 0) return res.redirect('/tasks/new');
    return res.redirect('/tasks');
  });
});

// app.post('/tasks', ())

app.listen(PORT);
