import React from "react";
import "./HeaderTwo.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Link } from "react-router-dom";

function HeaderTwo() {
  return (
    <nav className="headerTwo">
      <LocationOnOutlinedIcon className="headerTwo__icon" />
      <Link className="headerTwo__address">
        <span className="header__optionLineOne">Hello</span>
        <span className="header__optionLineTwo">Select your Address</span>
      </Link>

      <div className="headerTwo__nav">
        <Link className="headerTwo__link">
          <span className="headerTwo__option">Mobiles</span>
        </Link>
        <Link className="headerTwo__link">
          <span className="headerTwo__option">Best Sellers</span>
        </Link>
        <Link className="headerTwo__link">
          <span className="headerTwo__option">Today's Deals</span>
        </Link>
        <Link className="headerTwo__link">
          <span className="headerTwo__option">Computers</span>
        </Link>
        <Link className="headerTwo__link">
          <span className="headerTwo__option">Books</span>
        </Link>
        <Link className="headerTwo__link">
          <span className="headerTwo__option">Pantry</span>
        </Link>
        <Link className="headerTwo__link">
          <span className="headerTwo__option">New Releases</span>
        </Link>
        <Link className="headerTwo__link">
          <span className="headerTwo__option">Gift Ideas</span>
        </Link>
      </div>

      <div className="headerTwo__image">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/June/gaming-swm._CB430661085_.jpg"
          alt=""
        />
      </div>
    </nav>
  );
}

export default HeaderTwo;
