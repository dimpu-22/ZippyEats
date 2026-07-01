import FoodCard from "../ui/FoodCard";
import foods from "../../data/foods";

const PopularFoods = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Popular Foods
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Most loved dishes by our customers.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {foods.map((food) => (
  <FoodCard
    key={food.id}
    food={food}
  />
))}
        </div>
      </div>
    </section>
  );
};

export default PopularFoods;