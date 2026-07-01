import { useEffect, useState } from "react";
import {
  getRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../../services/adminRestaurantService";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cuisine: "",
    image: "",
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await getRestaurants();
      setRestaurants(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await updateRestaurant(editingId, formData);
      } else {
        await createRestaurant(formData);
      }

      setFormData({
        name: "",
        address: "",
        cuisine: "",
        image: "",
      });

      setEditingId(null);

      fetchRestaurants();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (restaurant) => {
    setEditingId(restaurant._id);

    setFormData({
      name: restaurant.name,
      address: restaurant.address,
      cuisine: restaurant.cuisine,
      image: restaurant.image,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this restaurant?")) return;

    try {
      await deleteRestaurant(id);
      fetchRestaurants();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Manage Restaurants
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-xl p-6 mb-8"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Restaurant Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="cuisine"
            placeholder="Cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-5 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          {editingId ? "Update Restaurant" : "Add Restaurant"}
        </button>
      </form>

      <div className="space-y-4">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant._id}
            className="border rounded-xl p-5 shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">
                {restaurant.name}
              </h2>

              <p>{restaurant.address}</p>

              <p>{restaurant.cuisine}</p>
            </div>

            <div className="space-x-2">
              <button
                onClick={() => handleEdit(restaurant)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(restaurant._id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;