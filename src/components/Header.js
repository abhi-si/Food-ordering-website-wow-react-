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
    //!if device greater then sm use bg color as yellow
    <div className="flex justify-between  bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100 h-24">
      <div className="logo container ">
        <img className="w-24 " src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-6 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6 ">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-6 ">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-6 ">Cart</li>
          <button
            className="login"
            onClick={() => {
              BtnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {" "}
            {BtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};


export default Header;