const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const passport = require("../config/passport");

module.exports = function (app) {

  // Get drinks

  app.post("/api/user", function (req, res) {
    console.log(req.body);
    db.user.create(req.body).then(function (dbUser) {
      res.redirect("/pos");
    });
  });

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.redirect("/pos");
  });

  app.post("/api/order", function(req, res) {
    db.order.create(req.body).then((result) => {
      res.json(result);
    })
  })

  app.get("/api/drinks", function (req, res) {
    db.drink.findAll({
      include: [
        { model: db.inventory, attributes: ['name', 'type'] },
        { model: db.amount, attributes: ['amount'] }]
    }).then(function (dbdrinks) {
      res.json(dbdrinks);
    });
  });



  app.get("/api/drinks/:id", function (req, res) {
    db.inventory.findAll({
      include: [{
        model: db.drink,
        where: {
          id: {
            [Op.eq]: req.params.id
          }
        },
      }]
    }).then(function (dbdrinks) {
      res.json(dbdrinks);
    });
  });

  // get inventory

  app.get("/api/inventory", function (req, res) {
    db.inventory.findAll({}).then(function (dbinventory) {
      res.render("inventory", dbinventory);
    });
  });

  app.get("/api/inventory/:id", function (req, res) {
    db.drink.findAll({
      include: [{
        model: db.inventory,
        where: {
          id: {
            [Op.eq]: req.params.id
          }
        },
      }]
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
  });

  app.get("/api/upc/:upc", function (req, res) {
    db.inventory.findAll({
      where: { UPC: req.params.upc }
    },
    ).then(function (dbInventory) {
      res.json(dbInventory);
    });
  });


  // get orders

  app.get("/api/order", function (req, res) {
    console.log(db.order)
    db.order.findAll({
      include: [
        { model: db.drink },
      ]
    }).then(function (dborder) {
      res.json(dborder);
    });
  });

  app.get("/api/order/:id", function (req, res) {
    db.drink.findAll({
      include: [{
        model: db.order,
        where: {
          id: {
            [Op.eq]: req.params.id
          }
        },
      }]
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
  });



  app.get("/api/test", function (req, res) {
    db.drink.getInventory().then(function (dborder) {
      res.json(dborder);
    });
  });



  // post routes
  // Add a new inventory item

  app.post("/api/drinks", function (req, res) {
    db.drink.create(req.body).then(function (dbDrink) {
      res.json(dbDrink);
    });
  });
  
  app.post("/api/inventory", function (req, res) {
    db.inventory.create(req.body).then(function (dbInventory) {
      res.json(dbInventory);
    });
  });

  // update inventory route
  app.put("/api/inventory", function (req, res) {
    console.log("update req.body ", req.body);
    db.inventory.update(req.body, 
      {
        where: {
          UPC: req.body.UPC,
        }
      }).then((result) => {
        res.json(result);
      });
  });

  // delete routes

};