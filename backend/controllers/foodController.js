const Food = require("../models/Food");

// Add Food
const addFood = async (req, res) => {
  try {
    const food = await Food.create(req.body);

    res.status(201).json({
      message: "Food Added Successfully",
      food,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Foods
const getFoods = async (req, res) => {
  try {
    const foods = await Food.find().populate("restaurant");

    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Foods By Restaurant
const getFoodsByRestaurant = async (req, res) => {
  try {
    const foods = await Food.find({
      restaurant: req.params.restaurantId,
    });

    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addFood,
  getFoods,
  getFoodsByRestaurant,
};