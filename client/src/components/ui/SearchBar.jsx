import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <div className="flex items-center bg-white rounded-xl shadow-md px-5 py-4">
        <FaSearch className="text-gray-400 mr-3" />

        <input
          type="text"
          placeholder="Search restaurants..."
          value={value}
          onChange={onChange}
          className="w-full outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;