import "./styles.css";
import { Link } from "react-router";
import { BiSolidUser } from "react-icons/bi";
import { MdMessage, MdShoppingCart } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
export function Header() {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const handleSearch = () => {
    setShowSearchBox((prev) => !prev);
  };
  return (
    <>
      <header>
        <div className="left">
          <Link className="header-logo">
            <img
              src="/public/images/logo-symbol.png"
              alt="header-logo"
              className="logo"
            />
            <img
              src="/public/images/Brand.png"
              alt="Brand-text"
              className="brand-text"
            />
          </Link>
        </div>
        <div className={"center"}>
          <input
            type="text"
            name="Search"
            id="search-inp"
            placeholder="Search"
          />
          <select id="category" name="Category">
            <option value="All">All category</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <input type="submit" value="Search" className="search-btn" />
        </div>
        <div className="right">
          <Link to="/profile" className="link">
            <BiSolidUser className="icon" />
            <p className="header-text">Profile</p>
          </Link>
          <Link to="/profile" className="link">
            <MdMessage className="icon" />
            <p className="header-text">Message</p>
          </Link>
          <Link to="/profile" className="link">
            <FaHeart className="icon" />
            <p className="header-text">Orders</p>
          </Link>
          <Link to="/profile" className="link">
            <MdShoppingCart className="icon" />
            <p className="header-text">My cart</p>
          </Link>
        </div>
      </header>
    </>
  );
}
