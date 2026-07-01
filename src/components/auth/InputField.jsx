const InputField = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2 font-medium">
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
      />
    </div>
  );
};

export default InputField;