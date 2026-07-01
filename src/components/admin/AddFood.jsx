import { useState } from "react";
import { createFood } from "../../services/adminService";

const AddFood = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    category: "",
    price: "",
    description: "",
    restaurant: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createFood(formData);

      alert("Food Added Successfully!");

      onClose();

      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Failed to add food.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-[500px]">
        <h2 className="text-2xl font-bold mb-5">
          Add Food
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Food Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <input
            type="text"
            name="restaurant"
            placeholder="Restaurant ID"
            value={formData.restaurant}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddFood;