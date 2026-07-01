import { useState } from "react";
import RestaurantCard from "../../components/RestaurantCard";


const restaurantData = [
  {
    id: 1,
    name: "Pizza Hut",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    cuisine: "Pizza, Fast Food",
    rating: 4.5,
    deliveryTime: "30-40 min",
  },
  {
    id: 2,
    name: "Burger King",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    cuisine: "Burgers, American",
    rating: 4.3,
    deliveryTime: "25-35 min",
  },
  {
    id: 3,
    name: "Domino's Pizza",
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500",
    cuisine: "Pizza",
    rating: 4.4,
    deliveryTime: "20-30 min",
  },
  {
    id: 4,
    name: "KFC",
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=500",
    cuisine: "Chicken, Fast Food",
    rating: 4.2,
    deliveryTime: "25-35 min",
  },
  {
    id: 5,
    name: "Subway",
    image:
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500",
    cuisine: "Healthy, Sandwiches",
    rating: 4.1,
    deliveryTime: "20-25 min",
  },
  {
    id: 6,
    name: "Biryani House",
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500",
    cuisine: "Biryani, Indian",
    rating: 4.8,
    deliveryTime: "35-45 min",
  },
];

const Restaurants = () => {
  const [restaurants] = useState(restaurantData);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-2">Restaurants</h1>

      <p className="text-gray-500 mb-8">
        Discover the best restaurants near you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;