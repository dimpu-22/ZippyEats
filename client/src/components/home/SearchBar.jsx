const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="max-w-4xl mx-auto my-8">
      <input
        type="text"
        placeholder="🔍 Search restaurants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
};

export default SearchBar;