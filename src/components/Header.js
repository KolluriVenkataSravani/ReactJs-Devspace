import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header= () =>{
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus=useOnlineStatus();
    const {loggedInUser}=useContext(UserContext);

    //Subscribing to the store using a selector
    const cartItems = useSelector((store)=>store.cart.items);

    return(
        <div className="flex justify-between shadow-lg bg-pink-50 sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About US</Link></li>
                    <li className="px-4"><Link to="/contact">Contact US</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold"><Link to="/cart">Cart({cartItems.length} items) </Link></li>
                    <button className="login" onClick={()=>{
                        btnNameReact=="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;