/* This function should map the data from the API to the data we need in our app.

The data we need in our app is:
    
- id (string) - the id of the vinyl
- name (string) - the name of the vinyl
- category (string) - the category of the vinyl
- composer (string) [optional] - the composer of the vinyl
- country (string) [optional] - the country of the vinyl 
- featuring (string) - the featuring of the vinyl
- coverImageUrl (string) - the cover image url of the vinyl

The data we get from the API is:

- id (string) - the id of the vinyl
- fields (object) - the fields of the vinyl
- fields.Name (string) - the name of the vinyl
- fields.Category (string) - the category of the vinyl
- fields.Composer (array) [optional] - the composer of the vinyl
- fields.Country (array) [optional] - the country of the vinyl 
- fields.Featuring (string) - the featuring of the vinyl
- fields.Cover (array) - the cover image of the vinyl
- fields.Cover[0] (object) - the cover image of the vinyl
- fields.Cover[0].url (string) - the cover image url of the vinyl
*/

const vinylMapper = (vinyl) => {
  console.log("ici", vinyl);
  const record = {
    id: vinyl.id,
    name: vinyl.fields.Name,
    category: vinyl.fields.Category,
    composer: vinyl.fields.Composer,
    country: vinyl.fields.Country,
    featuring: vinyl.fields.Featuring,
    coverImageUrl: vinyl.fields.Cover[0].url,
  };
  console.log("record", record);
  return record;
};

module.exports = { vinylMapper };
