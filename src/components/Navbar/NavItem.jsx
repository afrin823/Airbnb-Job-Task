const NavItem = ({ imgSrc, label, isNew }) => (
  <button className="flex flex-col items-center text-gray-600 relative group">
    <img src={imgSrc} alt={label.toLowerCase()} className="w-12 h-12" />
    <span className="text-sm font-medium">{label}</span>
    {isNew && (
      <span className="absolute -top-2 right-0 bg-blue-600 text-white text-[10px] rounded-full px-1">
        NEW
      </span>
    )}
    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
  </button>
);

export default NavItem;
