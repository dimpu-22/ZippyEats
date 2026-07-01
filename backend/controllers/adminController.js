const Restaurant = require("../models/Restaurant");
const Food = require("../models/Food");
const User = require("../models/User");
const Order = require("../models/Order");

// =====================================================
// Dashboard Statistics
// =====================================================
exports.getDashboardStats = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const restaurants = await Restaurant.countDocuments();
    const foods = await Food.countDocuments();
    const orders = await Order.countDocuments();

    res.status(200).json({
      users,
      restaurants,
      foods,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

// =====================================================
// RESTAURANT CRUD
// =====================================================

// Create Restaurant
exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);

    res.status(201).json({
      success: true,
      message: "Restaurant created successfully",
      restaurant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Restaurants
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();

    res.status(200).json({
      success: true,
      count: restaurants.length,
      restaurants,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Restaurant
exports.updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: "Restaurant not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Restaurant updated successfully",
      restaurant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Restaurant
exports.deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: "Restaurant not found",
      });
    }

    await restaurant.deleteOne();

    res.status(200).json({
      success: true,
      message: "Restaurant deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// FOOD CRUD
// =====================================================

// Create Food
exports.createFood = async (req, res) => {
  try {
    const food = await Food.create(req.body);

    res.status(201).json({
      success: true,
      message: "Food added successfully",
      food,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Foods
exports.getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find().populate("restaurant");

    res.status(200).json({
      success: true,
      count: foods.length,
      foods,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Food
exports.updateFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Food updated successfully",
      food,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Food
exports.deleteFood = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    await food.deleteOne();

    res.status(200).json({
      success: true,
      message: "Food deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};