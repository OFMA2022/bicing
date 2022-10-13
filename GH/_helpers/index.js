const API_URL = "http://localhost:3001/api/getAll/institutions";

const getInstitutions = (receivedInstitutions) => {
  fetch(API_URL)
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error", error);
    })
    .then((data) => {
      receivedInstitutions = data.data;
      console.log("INSTITUTIONS", receivedInstitutions);
      return receivedInstitutions;
    });
};
export default getInstitutions;
