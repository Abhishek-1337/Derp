import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";

const Table = ({
  currentPageData,
  modalDialogHandler,
  deleteProductHandler,
  headerOptions,
}) => {
  return (
    <table className="min-w-[720px] md:w-full mt-4 table-fixed">
      <thead>
        <tr className="text-[12px] text-white bg-gray-500 rounded-t-xl p-1">
          {headerOptions.map((header) => (
            <th key={header} className="font-medium mr-2">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currentPageData.map((item) => {
          return (
            <tr key={item.product_id} className="text-center text-[14px]">
              <td className="border-r-2 border-b-2 p-1">{item.product_name}</td>
              <td className="border-r-2 border-b-2 p-1">{item.category}</td>
              <td className="border-r-2 border-b-2 p-1">{item.price}</td>
              <td className="border-r-2 border-b-2 p-1">
                {item.quantity_in_stock}
              </td>
              <td className="border-r-2 border-b-2 p-1 flex justify-center gap-1">
                <div
                  id={item.product_id}
                  className="cursor-pointer bg-cyan-500 p-1 rounded"
                  onClick={() => modalDialogHandler(item)}
                >
                  <EditIcon />
                </div>
                <div
                  className="cursor-pointer bg-red-700 p-1 rounded"
                  onClick={() => deleteProductHandler(item)}
                >
                  <DeleteIcon />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
