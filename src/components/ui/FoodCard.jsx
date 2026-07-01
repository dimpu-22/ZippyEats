import { FaCartPlus, FaHeart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { addWishlist } from "../../redux/slices/wishlistSlice";

const FoodCard = ({ food }) => {
  const dispatch = useDispatch();

  if (!food) return null;

  const handleWishlist = () => {
    dispatch(addWishlist(food));
    alert(`${food.name} added to Wishlist ❤️`);
  };

  const handleCart = () => {
    dispatch(addToCart(food));
    alert(`${food.name} added to Cart 🛒`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="relative">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-56 object-cover"
        />

        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 bg-white p-3 rounded-full shadow hover:bg-red-500 hover:text-white transition"
        >
          <FaHeart />
        </button>
      </div>

      <div className="p-5">

        <h2 className="text-2xl font-bold">
          {food.name}
        </h2>

        <p className="text-gray-500 mt-2 h-12">
          {food.description}
        </p>

        <div className="flex justify-between items-center mt-5">

          <span className="text-2xl font-bold text-orange-500">
            ₹{food.price}
          </span>

          <span className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
            <FaStar className="text-yellow-500" />
            {food.rating || 4.5}
          </span>

        </div>

        <button
          onClick={handleCart}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition"
        >
          <FaCartPlus />
          Add to Cart
        </button>

      </div>

    </div>
  );
};

export default FoodCard;