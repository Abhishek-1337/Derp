const PrimaryButton = ({ modalOpenHandler, title }) => {
  return (
    <button
      className="p-3 pt-1 pb-1 max-h-[50px] leading-none md:max-h-[40px] bg-blue-700 text-white rounded-xl text-[12px] md:text-xs font-medium shadow-white shadow-sm hover:scale-105 transition-all"
      onClick={modalOpenHandler}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
