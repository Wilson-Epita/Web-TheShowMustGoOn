import React, { useState, useEffect } from "react";
import { getAllRecords } from "../api/airtable";
import VinylCard from "./VinylCard";
import { vinylMapper } from "../utils/VinylMapper";
import "./styles/ListVinyls.css";
import VinylCategoryFilters from "./VinylCategoryFilters";
import SearchInput from "./SearchInput";

const ListVinyls = () => {
  const [vinyls, setVinyls] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("any");
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  useEffect(() => {
    const fetchVinyls = async () => {
      const records = await getAllRecords();
      setVinyls(records);
    };

    fetchVinyls();
  }, []);

  const filteredVinyls = vinyls.filter((vinyl) => {
    if (
      selectedCategory !== "any" &&
      vinyl.fields.Category !== selectedCategory
    ) {
      return false;
    }
    // Check for partial match in any field
    return Object.values(vinyl.fields).some((field) =>
      String(field).toLowerCase().includes(searchQuery)
    );
  });

  return (
    <div className="list-vinyls">
      <SearchInput
        onSearch={setSearchQuery}
        placeholder="Rechercher votre vinyle"
      />
      <VinylCategoryFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className="list-vinyls-grid">
        {filteredVinyls.map((vinyl) => (
          <VinylCard key={vinyl.id} vinyl={vinylMapper(vinyl)} />
        ))}
      </div>
    </div>
  );
};

export default ListVinyls;
