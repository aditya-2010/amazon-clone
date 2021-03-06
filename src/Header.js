import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
      toast.info("You've successfully Signed Out", {
        position: "top-center",
        hideProgressBar: true,
      });
    }
  };

  const signinLink = () => {
    if (!user) {
      return "/signin";
    } else {
      return "/";
    }
  };

  return (
    <nav className="header">
      <ToastContainer position="top-center" hideProgressBar />
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__flag">
        <img
          className="header__flagIcon"
          src="https://cdn.countryflags.com/thumbs/india/flag-400.png"
          alt=""
        />
      </div>

      <div className="header__nav">
        <Link to={signinLink()} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">
              Hello, {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>

        <Link to="/orders" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* cart icon */}
            <ShoppingCartOutlinedIcon />
            {/* items in cart number */}
            <span className="header__optionLineTwo header__optionBasketCount ">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
