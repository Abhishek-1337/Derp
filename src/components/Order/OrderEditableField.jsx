import EditIcon from "../../shared/icons/EditIcon";
import TickRight from "../../shared/icons/TickRight";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { orderActions } from "../../store/slice/order";

const OrderEditableField = ({ item }) => {
  const dispatch = useDispatch();
  const [statusOption, setStatusOption] = useState(false);
  const [selectedValue, setSelectedValue] = useState(item.status);

  const dropdownClickHandler = () => {
    setStatusOption((statusOption) => !statusOption);
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const dropdownSaveHandler = () => {
    dispatch(orderActions.updateStatus({ selectedValue, id: item.order_id }));
    setStatusOption(false);
  };
  return (
    <td className="border-b-2 border-r-2 p-1">
      <div className="flex items-center justify-center gap-4">
        {statusOption && (
          <select
            value={selectedValue}
            onChange={(e) => handleChange(e, item)}
            className="border-2 border-gray-400 rounded-lg text-[13px] p-[1px] outline-none"
          >
            <option value="Delivered">Delivered</option>
            <option value="In progress">In progress</option>
            <option value="Return">Return</option>
            <option value="Pending">Pending</option>
          </select>
        )}
        {!statusOption && (
          <span
            className={`${item.status === "Delivered" && "bg-green-300"} ${
              item.status === "Return" && "bg-red-300"
            }
                  ${item.status === "Pending" && "bg-yellow-300"}
                  ${item.status === "In progress" && "bg-blue-300"}
                   p-1 pr-2 pl-2 rounded-lg text-[12px] font-medium `}
          >
            {item.status}
          </span>
        )}
        <div>
          {!statusOption ? (
            <button onClick={dropdownClickHandler}>
              <EditIcon />
            </button>
          ) : (
            <button onClick={dropdownSaveHandler}>
              <TickRight additionalStyles="h-3 w-3" />
            </button>
          )}
        </div>
      </div>
    </td>
  );
};

export default OrderEditableField;
