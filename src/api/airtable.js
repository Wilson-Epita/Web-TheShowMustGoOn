const Airtable = require("airtable");
const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = "app4WI5clWAEjUAIP";
const AIRTABLE_TABLE_ID = "tbloANHZYPpmoMYZC";

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

const vinylRecordFields = {
  category: "Categories",
  subCategory: "Sous catégorie",
  name: "Nom de vinyle",
  coverImage: "Couverture de l'album",
};

// Should return all records from airtable.
const getAllRecords = async () => {
  console.log(AIRTABLE_API_KEY);
  return await base(AIRTABLE_TABLE_ID)
    .select({
      view: "Grid view",
    })
    .all();
};

module.exports = { getAllRecords };
