// SHould call the API to get the list of vinyls

import React, { useState, useEffect } from "react";
import { getAllRecords } from "../api/airtable";
import VinylCard from "./VinylCard";
import { vinylMapper } from "../utils/VinylMapper";
import "./styles/ListVinyls.css";

const ListVinyls = () => {
  const [vinyls, setVinyls] = useState([]);

  useEffect(() => {
    getAllRecords().then((records) => {
      setVinyls(records);
      console.log(records);
    });
  }, []);

  return (
    <div className="list-vinyls-grid">
      {vinyls.map((vinyl) => (
        <VinylCard vinyl={vinylMapper(vinyl)} />
      ))}
    </div>
  );
};

export default ListVinyls;
