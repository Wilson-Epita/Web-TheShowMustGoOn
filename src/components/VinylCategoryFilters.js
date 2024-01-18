import React from "react";
import "./styles/VinylCategoryFilters.css";

const VinylCategoryFilters = ({ selectedCategory, onCategoryChange }) => {
  const handleCategoryChange = (category) => {
    onCategoryChange(category);
  };

  const renderButton = (category, label) => (
    <button
      className={
        selectedCategory === category ? "button-primary" : "button-secondary"
      }
      onClick={() => handleCategoryChange(category)}
    >
      {label}
    </button>
  );

  return (
    <div className="vinyl-category-filters">
      {renderButton("any", "Toutes les catégories")}
      {renderButton("Musique classique", "Musique classique")}
      {renderButton("Musiques du monde", "Musique du monde")}
    </div>
  );
};

export default VinylCategoryFilters;
