import { useState } from "react";
import { createRestaurant } from "../../services/adminService";

const AddRestaurant = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    cuisine: "",
    location: "",
    description: "",
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
      await createRestaurant(formData);

      alert("Restaurant Added Successfully!");

      onClose();

      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Failed to add restaurant.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-[500px]">
        <h2 className="text-2xl font-bold mb-5">
          Add Restaurant
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Restaurant Name"
            className="border p-3 rounded w-full"
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="border p-3 rounded w-full"
            onChange={handleChange}
          />

          <input
            type="text"
            name="cuisine"
            placeholder="Cuisine"
            className="border p-3 rounded w-full"
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            className="border p-3 rounded w-full"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            className="border p-3 rounded w-full"
            onChange={handleChange}
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

export default AddRestaurant;