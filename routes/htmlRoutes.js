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
  
  app.get("/scanner", isAuthenticated, function(req, res) {
    res.render("scanner", {user: req.user});
  });

  app.get("/pos", isAuthenticated,  function(req, res) {
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
