import React, { useState } from "react";
import "./styles/AddToCard.css"; // Import the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

const AddToCard = () => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div
      className={`add-to-card ${isAdded ? "added" : ""}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={isAdded ? faCheck : faPlus} className="icon" />

      <span className="text">
        {isAdded
          ? "Le vinyle a été ajouté à la liste de souhaits"
          : "Ajouter à la liste de souhaits"}
      </span>
    </div>
  );
};

export default AddToCard;
