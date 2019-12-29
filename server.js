// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
var campgrounds = [
  {
    name: "Awenda Provincial Park",
    image:
      "https://cdn.glitch.com/e8c2e2ee-0af5-40ad-8c56-dca3d22de50b%2Fawenda.jfif?v=1570293132939"
  },
  {
    name: "McCrae Lake Provincial Park",
    image:
      "https://cdn.glitch.com/e8c2e2ee-0af5-40ad-8c56-dca3d22de50b%2Fmccrae%20lake.jfif?v=1570293143930"
  },
  {
    name: "Craiglieth Provincial Park",
    image:
      "https://cdn.glitch.com/e8c2e2ee-0af5-40ad-8c56-dca3d22de50b%2Fcraiglieth.jfif?v=1570293139770"
  }
];
// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.render("home");
});

app.get("/aboutme", function(request, response) {
  response.render("aboutme");
});

app.get("/campgrounds", function(request, response) {
  response.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", function(request, response) {
  // get data from form and add to campgrounds array
  var name = request.body.name;
  var image = request.body.image;
  var newCampground = { name: name, image: image };
  campgrounds.push(newCampground);
  //redirect back to campgrounds page
  response.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
