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

// REWRITE THIS TO ACOMMODATE NEW DATA FORMAT
app.post('/new', (req, res) => {

  let newGroup = req.body.newGroup;
  let groupSelect = req.body.groupSelect;
  let itemBody = req.body.itemBody;

  jsonfile.readFile(FILE, (err, obj) => {

    let updated = obj;

    let date = new Date();

    let newItem = {};
    newItem["text"] = itemBody;
    newItem["time"] = date.getHours() + ":" + date.getMinutes();
    newItem["completion"] = 0;


    if (!newGroup && !groupSelect) {
      updated.data[0].items.push(newItem);
    }

    if (newGroup) {

      let alreadyExists = false;

      for (let i in obj.data) {
        if (newGroup.toLowerCase() === obj.data[i].label.toLowerCase()) {
          updated.data[i].items.push(newItem);
          alreadyExists = true;
          break;
        }
      }

      if (alreadyExists === false) {

        let newGroupObj = {};
        newGroupObj["label"] = newGroup;
        newGroupObj["count"] = 1;
        newGroupObj["items"] = [];
        newGroupObj["items"].push(newItem);

        updated.data.push(newGroupObj);
      }
    } else if (groupSelect) {

      for (let i in obj.data) {
        if (groupSelect === obj.data[i].label) {
          updated.data[i].items.push(newItem);
          break;
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
app.get("/new", (req, res) => {

  jsonfile.readFile(FILE, (err, obj) => {
    if (err) console.log(err);

    res.render("new", {data: obj.data});
  })
})

app.put("/", (req, res) => {

  let group = req.body.group;
  let item = req.body.item;

  jsonfile.readFile(FILE, (err, obj) => {

    let updated = obj;

    for (let i in updated.data) {
      if (updated.data[i].label === group) {
        for (let y in updated.data[i].items) {
          if (updated.data[i].items[y].text === item) {
            updated.data[i].items[y].completion++;
             if (updated.data[i].items[y].completion >= 2) {
               updated.data[i].items.splice(y, 1);
               updated.data[i].count--;
               if (updated.data[i].count <= 0 && i > 0) {
                 updated.data.splice(i, 1);
               }
             }
             break;
          }
          break;
        }
      }
    }

    jsonfile.writeFile(FILE, updated, (err) => {
      if (err) console.log(err);

      res.redirect("/");
    })
  })
})

// list stuff
app.get("/", (req, res) => {

  jsonfile.readFile(FILE, (err, obj) => {
    if (err) console.log(err);

    res.render("list", {data: obj.data});
  })
})

const PORT = 3000;
app.listen(PORT);
console.log("Listening on port: " + PORT);
