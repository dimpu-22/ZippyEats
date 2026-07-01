const categories = [
  "All",
  "Burger",
  "Pizza",
  "Biryani",
];

const CategoryFilter = ({ selected, setSelected }) => {
  return (
    <div className="flex gap-4 flex-wrap my-8">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`px-6 py-3 rounded-full ${
            selected === category
              ? "bg-orange-500 text-white"
              : "bg-gray-200"
          }`}
        >
          {category}
        </button>

      ))}

    </div>
  );
};

export default CategoryFilter;