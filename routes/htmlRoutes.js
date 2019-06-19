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
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   // res.render("404");
  // });

  app.get("/scanner", function(req, res) {
    res.render("scanner", {user: req.user});
  });

  app.get("/inventory", function(req, res){
    db.inventory.findAll({}).then(function(dbinventory){
      res.render("inventory", {data: dbinventory})
    })
  })
  app.get("/drinks", function(req, res){
    db.drink.findAll({}).then(function(dbdrinks){
      res.render("drink-menu", {data: dbdrinks})
    })
  })

  app.get("/orders", function(req, res){
    db.order.findAll({}).then(function(dbOrders){
      res.render("order", {data: dbOrders})
    })
  })

  app.get("/orders/:id", function(req, res){
    db.drink.findAll({
    // where: {
    //   id: req.params.id
    // }, 
    include: [{
      model: db.order,
      where: {id: {
        [Op.eq]: req.params.id}},
      // through: db.drink_orders,
    }]
  }).then(function (dbOrders) {
    console.log(dbOrders)
      res.render("order-single", {data: dbOrders})
    })
  })



  // app.get("/inventory", function(req, res){
  //   db.inventory.findAll({}).then(function (res) {
  //     res.render("inventory", {data: res})
  //   });
  // });

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
