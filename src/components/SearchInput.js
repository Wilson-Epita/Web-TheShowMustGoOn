import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./styles/SearchInput.css";

const SearchInput = ({ onSearch, placeholder }) => {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="search-input-wrapper">
      <input
        className="search-input"
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
};

export default SearchInput;
