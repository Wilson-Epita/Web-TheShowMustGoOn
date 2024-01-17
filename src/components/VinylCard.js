import React from "react";
import PropTypes from "prop-types";
import "./styles/VinylCard.css";
import AddToCard from "./AddToCard";

const VinylCard = ({ vinyl }) => {
  const {
    name,
    category,
    composer,
    artist,
    country,
    featuring,
    coverImageUrl,
  } = vinyl;

  return (
    <div className="vinyl-card">
      <div className="vinyl-card-add">
        <AddToCard />
      </div>
      <div className="vinyl-card-wrapper">
        <img src={coverImageUrl} alt={name} className="vinyl-card-image" />
        <div className="vinyl-card-content">
          <p className="vinyl-card-category">{category}</p>
          <div className="vinyl-card-content-bottom">
            <h3 className="vinyl-card-title">{name}</h3>
            {composer && <p className="vinyl-card-composer">{composer}</p>}
            {country && <p className="vinyl-card-country">{country}</p>}
            {artist && <p className="vinyl-card-artist">{artist}</p>}
            {featuring && <p className="vinyl-card-featuring">{featuring}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

VinylCard.propTypes = {
  vinyl: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    composer: PropTypes.string,
    artist: PropTypes.string,
    country: PropTypes.string,
    featuring: PropTypes.string,
    coverImageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default VinylCard;
