export const ButtonIcon = ({ Icon, className }) => {
  return (
    <button
      className={`hidden ${className} sm:flex px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out`}
    >
      {Icon ? <Icon className="h-5 w-5" /> : null}
    </button>
  );
};
