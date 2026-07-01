const CategoryCard = ({ emoji, title }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer p-6 flex flex-col items-center">
      <div className="text-5xl">{emoji}</div>

      <h3 className="mt-4 font-semibold text-lg">
        {title}
      </h3>
    </div>
  );
};

export default CategoryCard;