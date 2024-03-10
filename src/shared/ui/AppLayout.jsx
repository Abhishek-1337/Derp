import DashboardIcon from "../components/DashboardIcon";
import ProductIcon from "../components/ProductIcon";
import OrderIcon from "../components/OrderIcon";
import NavItemLayout from "./NavItemLayout";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import HamMenu from "../components/HamMenu";
import CrossIcon from "../components/CrossIcon";
import Avatar from "../components/Avatar";
import { useState } from "react";

const AppLayout = (props) => {
  const navigate = useNavigate();
  const [hamMenuFlag, setHamMenuFlag] = useState(false);
  const productLinkClick = () => {
    navigate("/product");
  };

  const dashboardLinkClick = () => {
    navigate("/");
  };

  const hamMenuClickHandler = () => {
    setHamMenuFlag((hamMenuFlag) => !hamMenuFlag);
  };

  return (
    /*nav css md:absolute md:left-[250px] md:right-0 md:w-[cal(100%-250px)] md:min-h-full md:flex md:justify-between p-3 md:mb-10*/

    /*sidebar css md:absolute md:h-full md:bg-myblue md:w-[250px]*/
    <div className="min-h-screen bg-gray-400 text-sm w-full">
      <div className="z-10 bg-white flex justify-between w-full p-4 md:fixed md:left-[250px] md:right-0 md:w-[calc(100%-250px)]">
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
        } fixed top-0 w-[50%] min-h-full bg-myblue md:w-[250px]`}
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
          <NavItemLayout>
            <span>
              <OrderIcon />
            </span>
            <span>Order</span>
          </NavItemLayout>
        </ul>
      </div>
      {props.children}
    </div>
  );
};

export default AppLayout;
