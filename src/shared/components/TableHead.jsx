const TableHead = ({ data }) => {
  return (
    <thead>
      <tr className="text-[12px] text-white bg-gray-500 rounded-t-xl p-1">
        {data.map((columnTitle) => {
          return (
            <th key={columnTitle} className="font-medium mr-2">
              {columnTitle}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
