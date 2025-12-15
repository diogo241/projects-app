type PostFilterProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

const SearchFilter = ({ searchQuery, onSearchChange }: PostFilterProps) => {
  return (
    <div>
      <input
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none mb-4"
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
