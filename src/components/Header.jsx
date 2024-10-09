import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LiaShopware } from "react-icons/lia";
import { HOME_ROUTE } from "../constants/routes";
import navMenu from "../constants/navMenu";
import { logoutUser } from "../redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {
  
  const navLinkClass = ({ isActive }) => (isActive ? "text-blue-700" : "");

  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);
  const {user}=useSelector(state=>state.auth)
  const isAuthenticated =user?true:false;
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  }

  return (
    <nav className="shadow sticky top-0 bg-white z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={HOME_ROUTE} className="flex items-center text-xl px-3 py-1 text-teal-800">
          <LiaShopware />
          <h2 className="ml-2 font-semibold">SHOP</h2>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
         
          {user? <button
            onClick={logout}
            type="button"
            className="text-white bg-teal-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
           logout
          </button>:null}
          <button
            onClick={() => setIsMobileMenuHidden(!isMobileMenuHidden)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMobileMenuHidden ? "hidden" : ""
          }`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
          {navMenu
          .filter(menu=>menu.auth == isAuthenticated)
           .map((menu) => (
              <li key={menu.route}>
                <NavLink to={menu.route} className={navLinkClass}>
                {menu.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;