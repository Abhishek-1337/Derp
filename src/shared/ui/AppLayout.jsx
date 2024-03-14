import DashboardIcon from "../icons/DashboardIcon";
import ProductIcon from "../icons/ProductIcon";
import OrderIcon from "../icons/OrderIcon";
import NavItemLayout from "./NavItemLayout";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import HamMenu from "../icons/HamMenu";
import CrossIcon from "../icons/CrossIcon";
import CalendarIcon from "../icons/CalendarIcon";
import Avatar from "../components/Avatar";
import { useState } from "react";

const AppLayout = (props) => {
  const navigate = useNavigate();
  const [hamMenuFlag, setHamMenuFlag] = useState(false);

  const productLinkClick = () => {
    navigate("/products");
  };

  const orderLinkClick = () => {
    navigate("/orders");
  };

  const dashboardLinkClick = () => {
    navigate("/");
  };

  const calendarLinkClick = () => {
    navigate("/calendar");
  };
  const hamMenuClickHandler = () => {
    setHamMenuFlag((hamMenuFlag) => !hamMenuFlag);
  };

  return (
    <div className="min-h-screen bg-gray-400 text-[16px] md:text-xs w-full">
      <div className="z-10 bg-white flex justify-between w-full p-4 pb-2 md:fixed md:left-[250px] md:right-0 md:w-[calc(100%-250px)] max-h-20">
        <button
          onClick={hamMenuClickHandler}
          className={`md:hidden cursor-pointer z-10  ${
            hamMenuFlag ? "ml-[50%] md:ml-0" : ""
          }`}
        >
          {hamMenuFlag ? <CrossIcon /> : <HamMenu />}
        </button>
        <div>
          <Avatar username="admin" />
        </div>
      </div>

      <div
        className={`${
          hamMenuFlag ? "" : "hidden md:block"
        } fixed z-20 top-0 w-[50%] min-h-full bg-myblue md:w-[250px]`}
      >
        <ul className="p-2 pr-0">
          <li className="text-white mb-16 flex flex-row items-center cursor-pointer">
            <span className="inline-block mr-2 w-8 h-8">
              <img src={Logo} alt="your logo" className="" />
            </span>
            <span className="hover:scale-125">
              <button onClick={dashboardLinkClick}>D-ERP</button>
            </span>
          </li>
          <NavItemLayout onClick={dashboardLinkClick}>
            <span>
              <DashboardIcon />
            </span>
            <span>
              {" "}
              <p>Dashboard</p>
            </span>
          </NavItemLayout>
          <NavItemLayout onClick={productLinkClick}>
            <span>
              <ProductIcon />
            </span>
            <span>
              <p>Product</p>
            </span>
          </NavItemLayout>
          <NavItemLayout onClick={orderLinkClick}>
            <span>
              <OrderIcon />
            </span>
            <span>Order</span>
          </NavItemLayout>
          <NavItemLayout onClick={calendarLinkClick}>
            <span>
              <CalendarIcon />
            </span>
            <span>Calendar</span>
          </NavItemLayout>
        </ul>
      </div>
      {props.children}
    </div>
  );
};

export default AppLayout;
