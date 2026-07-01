const express = require("express");
const router = express.Router();

const {
  addRestaurant,
  getRestaurants,
  getRestaurantById,
} = require("../controllers/restaurantController");

// Add Restaurant
router.post("/", addRestaurant);

// Get All Restaurants
router.get("/", getRestaurants);

// Get Single Restaurant
router.get("/:id", getRestaurantById);

module.exports = router;