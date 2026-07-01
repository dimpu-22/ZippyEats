const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{restaurant.name}</h2>

        <p className="text-gray-500">{restaurant.cuisine}</p>

        <div className="flex justify-between mt-3">
          <span>⭐ {restaurant.rating}</span>
          <span>{restaurant.deliveryTime}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;