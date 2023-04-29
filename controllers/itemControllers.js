const itemModel = require("../models/itemModels");

// get items
const getItemController = async (req, res, next) => {
    try {
      const items = await itemModel.find();
      res.status(200).json(items);
    } catch (error) {
      console.error(error);
      next(error); // pass the error to the error handler middleware
    }
  };
  

//add items
const addItemController = async (req, res, next) => {
    try {
      const newItem = await itemModel.create(req.body);
      res.status(201).send("Item created successfully!");
    } catch (error) {
      console.error(error);
      next(error); // pass the error to the error handler middleware
    }
  };
  

module.exports = { getItemController, addItemController}