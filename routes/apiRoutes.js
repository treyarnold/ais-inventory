var db = require("../models");
module.exports = function (app) {
  
  // Get drinks

  app.get("/api/drinks", function (req, res) {
    db.drink.findAll({
      include: [
        {model: db.inventory, attributes: ['name', 'type']},
        {model: db.amount, attributes: ['amount']}
      ]
    }).then(function (dbdrinks) {
      res.json(dbdrinks);
    });
  });

  app.get("/api/drinks/:id", function (req, res) {
    db.drink.findAll({
      include: [
        {model: db.inventory, attributes: ['name', 'type']},
        {model: db.amount, attributes: ['amount']}
      ],
      where: {
        id: req.params.id
      }
    }).then(function (dbdrinks) {
      res.json(dbdrinks);
    });
  });

// get inventory

  app.get("/api/inventory", function (req, res) {
    db.inventory.findAll({}).then(function (dbinventory) {
      res.json(dbinventory);
    });
  });

  app.get("/api/inventory/:id", function (req, res) {
    db.Inventory.findAll({
      where: {
        id: req.params.id
      }
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
  });


// get orders

  app.get("/api/orders", function (req, res) {
    db.order.find({
      include: [
        {model: db.drink},
      ]
    }).then(function (dborder) {
      res.json(dborder);
    });
  });

  app.get("/api/test", function (req, res) {
    db.drink.getAmounts({
    }).then(function (dborder) {
      res.json(dborder);
    });
  });


  app.get("/api/orders/:id", function (req, res) {
    db.order.findAll({
      include: [
        {model: db.drink},
      ],
      where: {
        id: req.params.id
      }
    }).then(function (dborder) {
      res.json(dborder);
    });
  });


  // post routes
  // Add a new inventory item

  app.post("/api/inventory", function (req, res) {
    db.inventory.create(req.body).then(function (dbinventory) {
      res.json(dbinventory);
    });
  });

  // delete routes

  };