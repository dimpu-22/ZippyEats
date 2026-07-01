import CategoryCard from "../ui/CategoryCard";
import categories from "../../data/categories";

const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Browse by Category
        </h2>

        <p className="text-gray-500 text-center mt-3">
          Choose your favourite food and order instantly.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              emoji={category.emoji}
              title={category.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;