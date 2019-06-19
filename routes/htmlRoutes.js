const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app) {
  // Load index page

  app.get("/test", function(req, res){
    res.send(res)
  })

  app.get("/", function(req, res) {
    res.render("login", {user: req.user});
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
    res.render("scanner", {user: req.user});
  });

  app.get("/inventory", function(req, res){
    res.render("inventory", {data: res})
  })

  app.get("/pos", function(req, res) {
    res.render("pos", {user: req.user});
  });

  app.get("/register", function(req, res) {
    res.render("register", {user: req.user});
  });

  app.get("/login", function(req, res) {
    res.render("login", {user: req.user});
  });
  
  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   // res.render("404");
  // });
};
