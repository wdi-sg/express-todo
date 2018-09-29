const express = require("express");
const jsonfile = require("jsonfile");
const reactEngine = require("express-react-views").createEngine();
const methodOverride = require("method-override");
const FILE = "./data.json";

/*
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(methodOverride("_method"));
// Telling Express Views to look into the public folder
app.use("/public", express.static("public"));

// this line below, sets a layout look to your express project
app.engine("jsx", reactEngine);

// this tells express where to look for the view files
app.set("views", __dirname + "/views");

// this line sets react to be the default view engine
app.set("view engine", "jsx");
/*
 * ===================================
 * Set Up Routes
 * ===================================
 */
app.get("/", (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) return console.error(err);
    res.render("index", obj);
  });
});

app.post("/newpost", (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    if (err) return console.error(err);
    const toDoListItems = obj.toDoItems;
    const newItem = req.body.newToDoItem;
    toDoListItems.push(newItem);
    return jsonfile.writeFile(FILE, obj, (err) => {
      if (err) return console.error(err);
      res.render("newpost", {newItem: newItem});
    });
  });
});

app.get("/newpost", (req,res) => {
    res.render("newpost")
})

app.listen(3000, () => console.log("Listening on Port 3000"));
