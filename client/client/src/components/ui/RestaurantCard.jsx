import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold">
          {restaurant.name}
        </h2>

        <p className="text-gray-500 mt-2">
          {restaurant.cuisine}
        </p>

        <div className="flex justify-between mt-4">
          <span>⭐ {restaurant.rating}</span>
          <span>{restaurant.deliveryTime}</span>
        </div>

        <Link to={`/restaurant/${restaurant._id}`}>
          <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition">
            View Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;