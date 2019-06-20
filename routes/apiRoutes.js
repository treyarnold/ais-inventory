const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op

module.exports = function (app) {
  
  // Get drinks

  app.get("/api/drinks", function (req, res) {
    db.drink.findAll({
      include: [
        {model: db.inventory, attributes: ['name', 'type']},
        {model: db.amount, attributes: ['amount']}]
        // where: {id: {
        //   [Op.gt]: 0}}
        // }]
      }).then(function (dbdrinks) {
      res.json(dbdrinks);
    });
  });

  app.get("/api/drinks/:id", function (req, res) {
    db.inventory.findAll({
      include: [{
        model: db.drink,
        where: {id: {
          [Op.eq]: req.params.id}},
        // through: db.drink_orders,
      }]

      // include: [
      //   {model: db.inventory, attributes: ['name', 'type']},
      //   {model: db.amount, attributes: ['amount']}
      // ],
      // where: {
      //   id: req.params.id
      // }
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
        where: {id: {
          [Op.eq]: req.params.id}},
      }]
  }).then(function (dbInventory) {
      res.json(dbInventory);
    });
  });


// get orders

  app.get("/api/order", function (req, res) {
    console.log(db.order)
    db.order.findAll({
      include: [
        {model: db.drink},
      ]
    }).then(function (dborder) {
      res.json(dborder);
    });
  });

  app.get("/api/order/:id", function (req, res) {
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

  // delete routes

  };