import { useState } from "react";
import RestaurantCard from "../../components/ui/RestaurantCard";

const restaurants = [
  {
    id: 1,
    name: "Pizza Hut",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    cuisine: "Pizza",
    rating: 4.5,
    deliveryTime: "30-40 min",
  },
  {
    id: 2,
    name: "Burger King",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    cuisine: "Burger",
    rating: 4.3,
    deliveryTime: "25-35 min",
  },
  {
    id: 3,
    name: "Domino's",
    image: "https://images.unsplash.com/photo-1548365328-9f547fb0953b?w=500",
    cuisine: "Pizza",
    rating: 4.6,
    deliveryTime: "20-30 min",
  },
  {
    id: 4,
    name: "KFC",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb36?w=500",
    cuisine: "Chicken",
    rating: 4.4,
    deliveryTime: "25-35 min",
  },
  {
    id: 5,
    name: "Subway",
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=500",
    cuisine: "Sandwich",
    rating: 4.2,
    deliveryTime: "20-30 min",
  },
  {
    id: 6,
    name: "McDonald's",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
    cuisine: "Fast Food",
    rating: 4.5,
    deliveryTime: "20-25 min",
  },
];

const categories = [
  "All",
  "Pizza",
  "Burger",
  "Chicken",
  "Sandwich",
  "Fast Food",
];

const Restaurant = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filteredRestaurants = restaurants
    .filter((restaurant) => {
      const searchMatch =
        restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(search.toLowerCase());

      const categoryMatch =
        selectedCategory === "All" ||
        restaurant.cuisine === selectedCategory;

      return searchMatch && categoryMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;

        case "delivery":
          return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);

        case "name":
          return a.name.localeCompare(b.name);

        default:
          return 0;
      }
    });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">Restaurants</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search restaurants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2 border rounded-lg px-4 py-3 mb-6"
      />

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full transition ${
              selectedCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-200 hover:bg-orange-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Sort Dropdown */}
      <div className="mb-8">
        <label className="font-semibold mr-3">Sort By:</label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="default">Default</option>
          <option value="rating">⭐ Rating</option>
          <option value="delivery">⏱ Delivery Time</option>
          <option value="name">🔤 Name (A-Z)</option>
        </select>
      </div>

      {/* Restaurant Cards */}
      {filteredRestaurants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </div>
      ) : (
        <h2 className="text-center text-2xl text-gray-500 mt-20">
          No Restaurants Found 😔
        </h2>
      )}
    </div>
  );
};

export default Restaurant;