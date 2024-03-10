import { useSelector } from "react-redux";
import { useState } from "react";
import EditIcon from "../../../shared/components/EditIcon";
import DeleteIcon from "../../../shared/components/DeleteIcon";
import Modal from "../../../shared/components/Modal";

const ProductTableMain = () => {
  const productData = useSelector((state) => state.product.data);
  const [modalDialog, setModalDialog] = useState(false);

  const modalDialogHandler = () => {
    setModalDialog(true);
  };

  const handleModalOnCancel = () => {
    setModalDialog(false);
  };

  return (
    // <div className="mt-4">
    //   <ul className="p-1">
    //     <li className="text-[10px] flex text-center bg-gray-500 rounded-t-lg font-medium text-white">
    //       <div className="grow">NAME</div>
    //       <div className="flex-grow">CATEGORY</div>
    //       <div className="flex-grow">PRICE</div>
    //       <div className="flex-grow">QUANTITY</div>
    //       <div className="flex-grow">ACTION</div>
    //     </li>
    //     <li className="text-[0.75em] flex min-w-max">
    //       <div className="flex grow items-center justify-center p-2">
    //         <span className="inline-block w-[60%] text-center">
    //           My name is abhishek
    //         </span>
    //       </div>
    //       <div className="flex grow items-center justify-center p-2">
    //         <span className="inline-block w-[60%] text-center">
    //           My name is abhishek
    //         </span>
    //       </div>
    //       <div className="flex grow items-center justify-center p-2">
    //         <span className="inline-block w-[60%] text-center">
    //           My name is abhishek
    //         </span>
    //       </div>
    //       <div className="flex grow items-center justify-center p-2">
    //         <span className="inline-block w-[60%] text-center">
    //           My name is abhishek
    //         </span>
    //       </div>
    //       <div className="flex grow items-center justify-center p-2">
    //         <span className="inline-block w-[60%] text-center">
    //           My name is abhishek
    //         </span>
    //       </div>

    /* <div className="grow">
            <span className="inline-block w-[60%]">yoo</span>
          </div>
          <div className="grow">
            <span className="inline-block w-[60%]">Abcwhat</span>
          </div>
          <div className="grow">
            <span className="inline-block w-[60%]">dfdfdf</span>
          </div>
          <div className="grow">
            <span className="inline-block w-[60%]">dfdfdf</span>
          </div> */

    //     </li>
    //   </ul>
    // </div>

    <div className="overflow-auto p-1">
      <Modal isOpen={modalDialog} onCancel={handleModalOnCancel} />
      <table className="min-w-[720px] md:w-full mt-4 table-fixed">
        <tr className="text-[12px] text-white bg-gray-500 rounded-t-xl p-1">
          <th className="font-medium mr-2">NAME</th>
          <th className="font-medium mr-2">CATEGORY</th>
          <th className="font-medium mr-2">PRICE</th>
          <th className="font-medium mr-2">QUANTITY</th>
          <th className="font-medium mr-2">ACTION</th>
        </tr>
        {productData.map((item) => {
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
                  className="cursor-pointer bg-cyan-500 p-1 rounded"
                  onClick={modalDialogHandler}
                >
                  <EditIcon />
                </div>
                <div className="cursor-pointer bg-red-700 p-1 rounded">
                  <DeleteIcon />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ProductTableMain;
