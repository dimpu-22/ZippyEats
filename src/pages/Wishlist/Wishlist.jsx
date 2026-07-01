import { useSelector, useDispatch } from "react-redux";
import { removeWishlist } from "../../redux/slices/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist.items);

  const totalPrice = wishlist.reduce(
    (total, item) => total + item.price,
    0
  );

  if (wishlist.length === 0) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="text-center">
          <h1 className="text-7xl">❤️</h1>

          <h2 className="text-3xl font-bold mt-5">
            Wishlist is Empty
          </h2>

          <p className="text-gray-500 mt-3">
            Save your favourite foods here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          My Wishlist ❤️
        </h1>

        <div className="text-right">
          <p className="text-lg font-semibold">
            Items: {wishlist.length}
          </p>

          <p className="text-orange-500 font-bold">
            Total: ₹{totalPrice}
          </p>
        </div>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {wishlist.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >

            <img
              src={food.image}
              alt={food.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold">
                {food.name}
              </h2>

              <p className="text-orange-500 font-bold mt-2">
                ₹{food.price}
              </p>

              <div className="flex gap-3 mt-5">

                <button
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() =>
                    dispatch(removeWishlist(food.id))
                  }
                  className="bg-red-500 hover:bg-red-600 text-white px-4 rounded-lg"
                >
                  Remove
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Wishlist;