const Restaurant = require("../models/Restaurant");

// Add Restaurant
const addRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);

    res.status(201).json({
      message: "Restaurant Added Successfully",
      restaurant,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Restaurants
const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();

    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Restaurant
const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        message: "Restaurant Not Found",
      });
    }

    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addRestaurant,
  getRestaurants,
  getRestaurantById,
};