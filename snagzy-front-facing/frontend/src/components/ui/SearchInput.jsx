export const SearchInput = ({ className, type, ...props }) => {
  return (
    <input
      type={type}
      className={`
        flex h-10 w-full theme-navbar-search rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:search-input-ring focus:border-transparent 
        disabled:cursor-not-allowed disabled:opacity-50 
        ${className}
      `}
      {...props}
    />
  );
};
