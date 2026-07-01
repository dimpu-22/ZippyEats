const FoodSearch = ({ search, setSearch }) => {
  return (
    <div className="my-8">
      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
};

export default FoodSearch;