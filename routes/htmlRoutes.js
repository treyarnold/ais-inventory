const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const Sequelize = require("sequelize");
const Op = Sequelize.Op

module.exports = function(app) {
  // Load index page

  app.get("/test", function(req, res){
    res.send(res)
  })

  app.get("/", function(req, res) {
    res.render("login", {user: req.user});
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", isAuthenticated, function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/drink/add", isAuthenticated, function(req, res) {
    res.render("new_drink");
  });
  app.get("/inventory/add", isAuthenticated, function(req, res) {
    res.render("new_inventory");
  });


  app.get("/scanner", isAuthenticated, function(req, res) {
    res.render("scanner", {user: req.user});
  });

  app.get("/inventory", isAuthenticated, function(req, res){
    db.inventory.findAll({}).then(function(dbinventory){
      res.render("inventory", {data: dbinventory})
    })
  })
  app.get("/drinks", isAuthenticated, function(req, res){
    db.drink.findAll({}).then(function(dbdrinks){
      res.render("drink-menu", {data: dbdrinks})
    })
  })

  app.get("/orders", isAuthenticated, function(req, res){
    db.order.findAll({}).then(function(dbOrders){
      console.log(dbOrders)
      res.render("order", {data: dbOrders})
    })
  })

  app.get("/orders/:id", isAuthenticated, function(req, res){
    db.drink.findAll({
    include: [{
      model: db.order,
      where: {id: {
        [Op.eq]: req.params.id}},
    }]
  }).then(function (dbOrders) {
      res.render("order-single", {data: dbOrders})
    })
  });

  app.get("/pos", isAuthenticated, function(req, res) {
    db.drink.findAll({}).then((result) => {
      res.render("pos", {user: req.user, drinks: result});
    })
  });

  app.get("/register", function(req, res) {
    res.render("register", {user: req.user});
  });

  app.get("/login", function(req, res) {
    res.render("login", {user: req.user});
  });
  };
