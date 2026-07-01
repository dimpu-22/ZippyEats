import { useState } from "react";
import foodData from "../../data/foodData";
import FoodCard from "../../components/ui/FoodCard";
import FoodSearch from "../../components/ui/FoodSearch";
import CategoryFilter from "../../components/ui/CategoryFilter";

const Food = () => {

  const [search, setSearch] = useState("");

  const [selected, setSelected] =
    useState("All");

  const filteredFoods = foodData.filter((food) => {

    const searchMatch =
      food.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const categoryMatch =
      selected === "All"
        ? true
        : food.category === selected;

    return searchMatch && categoryMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold">
        Food Menu
      </h1>

      <FoodSearch
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        selected={selected}
        setSelected={setSelected}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredFoods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
          />
        ))}

      </div>

    </div>
  );
};

export default Food;