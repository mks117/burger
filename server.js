  // *A)* Add a delete button into the `index.handlebars` file next to each cat.

  // *B)* Add on to the following:

  //     *--* The *ORM* to include a delete key and function

  //     *--* The cat model to include a delete key and function that uses the *ORM*

  // *C)* The `catsController.js` file to have a `/:id` delete route, to call the delete key of the cat model, and to pass in arguments as necessary


  var express = require("express");
  var bodyParser = require("body-parser");
  var methodOverride = require("method-override");
  var path = require("path");
  
  var port = 3000;
  
  var app = express();
  
  // Serve static content for the app from the "public" directory in the application directory.
  app.use(express.static("public"));
  
  app.use(bodyParser.urlencoded({ extended: false }));
  
  // Override with POST having ?_method=DELETE
  app.use(methodOverride("_method"));
  
  // Set Handlebars.
  var exphbs = require("express-handlebars");
  
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");
  
  // Import routes and give the server access to them.
  var routes = require("./controllers/burgers_controllers.js");
  
  app.use("/", routes);
  
  app.listen(port);
  