import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { alertActions } from "../../store/slice/alert";

const Alert = ({ data }) => {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      dispatch(alertActions.setAlertData(null));
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <>
      {visible && (
        <div
          className={`min-w-max fixed bottom-[15%] rounded-xl text-white text-sm p-3 left-[50%] translate-x-[-50%] shadow-md shadow-white ${
            data.status === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {data.message}
        </div>
      )}
    </>
  );
};

export default Alert;
