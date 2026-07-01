const express = require("express");
const router = express.Router();

const {
  addFood,
  getFoods,
  getFoodsByRestaurant,
} = require("../controllers/foodController");

router.post("/", addFood);

router.get("/", getFoods);

router.get("/restaurant/:restaurantId", getFoodsByRestaurant);

module.exports = router;