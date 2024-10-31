import { useState } from "react";
import "./Header.css";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

function Header() {
  const [searchCategory, setSearchCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSearchCategory(category);
  };

  return (
    <div className="header">
      {/* Amazon Logo */}
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
      />

      {/* Deliver to Location */}
      <div className="header__deliver">
        <FaMapMarkerAlt className="header__locationIcon" />
        <div className="header__option">
          <span className="header__optionLineOne">Deliver to</span>
          <span className="header__optionLineTwo">Ethiopia</span>
        </div>
      </div>

      {/* Search Bar with Dropdown */}
      <d className="header__search">
        {/* Dropdown for categories */}
        <div className="header__searchDropdown">
          <select
            value={searchCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="header__searchDropdownSelect"
          >
            <option value="All">All</option>
            <option value="Books">Books</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home">Home</option>
          </select>
        </div>
        {/* Search input */}
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search Amazon"
        />
        {/* Search button */}
        <button className="header__searchButton">
          <FaSearch className="header__searchIcon" />
        </button>
      </d>

      {/* Language Selector */}
      <div className="header__language">
        <img
          className="header__flag"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
          alt="US Flag"
        />
        <span className="header__languageText">EN</span>
        <IoMdArrowDropdown className="header__languageDropdownIcon" />
      </div>

      {/* Navigation Links */}
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, sign in</span>
          <span className="header__optionLineTwo">account & lists</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        {/* <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div> */}

        {/* Shopping Cart */}
        <div className="header__optionBasket">
          <FaShoppingCart />
          <span className="header__basketCount"> 0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
