import { useEffect, useState } from "react";
import {
  getFoods,
  createFood,
  updateFood,
  deleteFood,
} from "../../services/adminFoodService";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const data = await getFoods();
      setFoods(data);
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
        await updateFood(editingId, formData);
      } else {
        await createFood(formData);
      }

      setFormData({
        name: "",
        price: "",
        category: "",
        image: "",
      });

      setEditingId(null);
      fetchFoods();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (food) => {
    setEditingId(food._id);

    setFormData({
      name: food.name,
      price: food.price,
      category: food.category,
      image: food.image,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this food item?")) return;

    try {
      await deleteFood(id);
      fetchFoods();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Manage Food Items
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-xl p-6 mb-8"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Food Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
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
          {editingId ? "Update Food" : "Add Food"}
        </button>
      </form>

      <div className="space-y-4">
        {foods.map((food) => (
          <div
            key={food._id}
            className="border rounded-xl p-5 shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">
                {food.name}
              </h2>

              <p>₹ {food.price}</p>

              <p>{food.category}</p>
            </div>

            <div className="space-x-2">
              <button
                onClick={() => handleEdit(food)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(food._id)}
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

export default Foods;