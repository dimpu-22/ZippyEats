const express = require("express");
const router = express.Router();

const {
  getDashboardStats,

  // Restaurant
  createRestaurant,
  getAllRestaurants,
  updateRestaurant,
  deleteRestaurant,

  // Food
  createFood,
  getAllFoods,
  updateFood,
  deleteFood,
} = require("../controllers/adminController");

const protect = require("../middleware/authMiddleware");

// ===============================
// Dashboard
// ===============================
router.get("/dashboard", protect, getDashboardStats);

// ===============================
// Restaurant CRUD
// ===============================
router.post("/restaurants", protect, createRestaurant);
router.get("/restaurants", protect, getAllRestaurants);
router.put("/restaurants/:id", protect, updateRestaurant);
router.delete("/restaurants/:id", protect, deleteRestaurant);

// ===============================
// Food CRUD
// ===============================
router.post("/foods", protect, createFood);
router.get("/foods", protect, getAllFoods);
router.put("/foods/:id", protect, updateFood);
router.delete("/foods/:id", protect, deleteFood);

module.exports = router;