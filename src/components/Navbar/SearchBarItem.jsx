const SearchBarItem = ({ icon, title, subtitle }) => (
  <div className="flex-1 flex flex-col items-center justify-center px-5 py-4 hover:bg-gray-100 transition-colors cursor-pointer rounded-3xl">
    <div className="flex items-center gap-1">
      {icon}
      <p className="text-sm font-semibold text-gray-800">{title}</p>
    </div>
    <p className="text-xs text-gray-400">{subtitle}</p>
  </div>
);

export default SearchBarItem;
