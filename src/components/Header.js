import { LOGO_URL } from "../utils/constant";
import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Header = () => {


  const [BtnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  console.log(data);

  return (
    //!if device size  greater then sm use bg color as yellow
    <div className="flex justify-between  bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100 h-24">
      <div className="logo container ">
        <img className="w-24 " src={LOGO_URL}></img>
      </div>
      <div className="flex items-center gap-12 mx-6 py-4">
        <div>Online Status:{onlineStatus ? "🟢" : "🔴"}</div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div className="flex-nowrap">
          <Link to="/contact">Contact us</Link>
        </div>
        <div>Cart</div>
        {/* <ul className="flex p-4 m-4">
          <li className="px-4 inline-block!important align-middle">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 ">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4 ">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4 ">Cart</li>
          <button
            className="login"
            onClick={() => {
              BtnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {" "}
            {BtnName}
          </button>
        </ul> */}
      </div>
    </div>
  );
};


export default Header;