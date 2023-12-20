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
    <div className="flex  bg-gray-100 shadow-lg  h-24">
      <div className="logo container ">
        <Link to="/">
          <img className="w-24 " src={LOGO_URL}></img>
        </Link>
      </div>
      <div className="flex items-center gap-12 mx-6 py-4">
        <span className="whitespace-nowrap font-bold">
          OnlineStatus:{onlineStatus ? "🟢" : "🔴"}
        </span>

        <div className="whitespace-nowrap font-bold">
          <Link to="/about">About Us</Link>
        </div>
        <span className="whitespace-nowrap font-bold">
          <Link to="/contact">Contact Us</Link>
        </span>
        <div className="font-bold">Cart</div>
        <div className="whitespace-nowrap font-bold"> Sign in</div>
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