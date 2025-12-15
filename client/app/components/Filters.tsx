type FiltersProps = {
  filters: string[];
  selectedFilter: string;
  onFilterSetPage: (page: number) => void;
  onFilterSetCategory: (category: string) => void;
};

const Filters: React.FC<FiltersProps> = ({
  selectedFilter,
  filters,
  onFilterSetPage,
  onFilterSetCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8 mt-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => {
            onFilterSetPage(1);
            onFilterSetCategory(filter);
          }}
          className={`px-3 py-1 rounded cursor-pointer text-sm ${selectedFilter === filter ? 'bg-blue-600 text-white' : 'bg-gray-700'}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;
