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

// add stuff to list
app.post('/new', (req, res) => {

  let newGroup = req.body.newGroup;
  let groupSelect = req.body.groupSelect;
  let itemBody = req.body.itemBody;

  jsonfile.readFile(FILE, (err, obj) => {

    let updated = obj;

    if (!newGroup && !groupSelect) {
      updated.data[0].items.push(itemBody);
    }

    if (newGroup) {

      let alreadyExists = false;

      for (let i in obj.data) {
        if (newGroup.toLowerCase() === obj.data[i].label.toLowerCase()) {
          updated.data[i].items.push(itemBody);
          alreadyExists = true;
          break;
        }
      }

      if (alreadyExists === false) {

        let date = new Date();

        let time = date.getHours() + ":" + date.getMinutes();

        let newGroupObj = {};
        newGroupObj["label"] = newGroup;
        newGroupObj["date_time"] = time;
        newGroupObj["items"] = [];
        newGroupObj["items"].push(itemBody);

        updated.data.push(newGroupObj);
      }
    } else if (groupSelect) {

      for (let i in obj.data) {
        if (newGroup === obj.data[i].label) {
          updated.data[i].items.push(itemBody);
        }
      }
    }

    if (itemBody === "") {
      res.redirect("/");
    } else {

      jsonfile.writeFile(FILE, updated, (err) => {
        if (err) console.log(err);

        res.redirect("/");
      })
    }
  })
})

// new item form
app.get ("/new", (req, res) => {

  jsonfile.readFile(FILE, (err, obj) => {

    res.render("new", {data: obj.data});
  })
})

// list stuff
app.get ("/", (req, res) => {

  jsonfile.readFile(FILE, (err, obj) => {

    res.render("list", {data: obj.data});
  })
})

const PORT = 3000;
app.listen(PORT);
console.log("Listening on port: " + PORT);
