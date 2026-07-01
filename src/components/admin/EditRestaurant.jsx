import { useState, useEffect } from "react";
import { updateRestaurant } from "../../services/adminService";

const EditRestaurant = ({ restaurant, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    cuisine: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    if (restaurant) {
      setFormData({
        name: restaurant.name || "",
        image: restaurant.image || "",
        cuisine: restaurant.cuisine || "",
        location: restaurant.location || "",
        description: restaurant.description || "",
      });
    }
  }, [restaurant]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateRestaurant(restaurant._id, formData);

      alert("Restaurant Updated Successfully!");

      onClose();

      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Failed to update restaurant.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-[500px]">
        <h2 className="text-2xl font-bold mb-5">
          Edit Restaurant
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <input
            type="text"
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <textarea
            name="description"
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRestaurant;