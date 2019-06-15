var db = require("../models");

module.exports = function(app) {
  // Load index page

  app.get("/test", function(req, res){
    res.send(res)
  })

  app.get("/", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
    res.render("login");
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //   //   res.render("example", {
  //   //     example: dbExample
  //   //   });
  //   // });
  // });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   // res.render("404");
  // });

  app.get("/scanner", function(req, res) {
    res.render("scanner");
  });

  app.get("/pos", function(req, res) {
    res.render("pos");
  });

  app.get("/register", function(req, res) {
    res.render("register");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });
};
