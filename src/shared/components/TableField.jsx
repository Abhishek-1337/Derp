const TableField = ({ data, additionalStyles }) => {
  return (
    <td className={`border-b-2 border-r-2 p-1 ${additionalStyles}`}>{data}</td>
  );
};

export default TableField;
