const Costs = require("../models/costsModels");

const getAllCosts = (req, res) => {
  Costs.getAllCosts((err, allCosts) => {
    if (err) {
      console.log("ERROR!!! GET COSTS: ", err);
      return res.sendStatus(500);
    }

    res.status(200).json(allCosts);
  });
};

const findById = (req, res) => {
  Costs.findById(req.params.id, (err, findCost) => {
    if (err) {
      console.log("ERROR!!! GET ID COST: ", err);
      return res.sendStatus(500);
    }

    res.status(200).json(findCost);
  });
};

const postCosts = (req, res) => {
  const cost = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    currency: req.body.currency,
    created: req.body.created,
    modified: req.body.modified,
    categories: req.body.categories
  };

  Costs.postCosts(cost, (err, result) => {
    if (err) {
      console.log("POST ERR!!!: ", err);
      return res.sendStatus(500);
    }

    res.status(200).json(cost);
  });
};

const updatePrice = (req, res) => {
  const updatedPrice = {
    price: req.body.price
  };

  Costs.update(req.params.id, updatedPrice, (err, result) => {
    if (err) {
      console.log("PUT ERR!!!: ", err);
      return res.sendStatus(500);
    }

    res.sendStatus(200);
  });
};

const deleteCostById = (req, res) => {
  Costs.deleteCostById(req.params.id, (err, result) => {
    if (err) {
      console.log("DELETE ERR!!!: ", err);
      return res.sendStatus(500);
    }

    res.sendStatus(200);
  });
};
module.exports = {
  getAllCosts,
  findById,
  postCosts,
  updatePrice,
  deleteCostById
};
