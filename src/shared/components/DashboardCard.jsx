const DashboardCard = ({
  description,
  type,
  value,
  icon,
  additionalStyles,
}) => {
  return (
    <div className="flex w-full bg-white rounded-lg p-4 items-center mb-4 shadow-gray-800 shadow-md md:m-0">
      <div className={`p-1 bg-green-500 rounded-lg mr-2 ${additionalStyles}`}>
        {icon}
      </div>
      <div className="flex-1 flex flex-col">
        <span className="text-[12px] opacity-100">{description}</span>
        <span>{type}</span>
      </div>
      <div className="text-lg font-medium mr-10">{value}</div>
    </div>
  );
};

export default DashboardCard;
