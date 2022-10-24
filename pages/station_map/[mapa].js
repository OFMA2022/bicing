import NavBar from "../../components/NavBar/NavBar";
import MyMap from "../../components/MyMap";
import { useLoadScript } from "@react-google-maps/api";
import data_information from "../../data_information.json";
import data_status from "../../data_status.json";
import PreviousPage_Button from "../../components/PreviousPage_Button";
import Description_Map from "../../components/Description_Map";
import { useState } from "react";

function Mapa({ stationData }) {
  const [value, setValues] = useState([]);

  const LatLon = {
    direction: { lat: stationData.lat, lng: stationData.lon },
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  data_status.data.stations.filter((station_status) => {
    if (stationData.station_id == station_status.station_id) {
      value.push(station_status);
    }
  });

  return (
    <div className="max-w-[1400px] ml-auto mr-auto items-center">
      <div className="w-full overflow-x-hidden overflow-y-hidden mb-5">
        {/* NAVBAR */}
        <NavBar />
      </div>
      <div>
        {/* BACKWARD BUTTON */}
        <PreviousPage_Button />
      </div>
      <div>
        {/* DESCRIPTION */}
        <Description_Map />
      </div>

      <div className="flex items-center justify-center">
        {/* MAP */}
        {!loadError && isLoaded != "" ? (
          <MyMap
            typeMarker="unique"
            direction={LatLon.direction}
            zoom={20}
            center={LatLon.direction}
            mapContainerClassName="map-container-station"
            stations={stationData}
            stations_status={value[0]}
          />
        ) : (
          <div className="text-5xl text-center mt-40">
            Por favor actualice la página para recargar la mapa.
          </div>
        )}
      </div>
    </div>
  );
}
export default Mapa;

export const getStaticPaths = async () => {
  {
    /* FETCH METHOD: IN CASE WE ARE GETTING DATA FROM OUR DATABASE (OUR BACK-END)*/
  }
  /*const getInstitutions = () =>
    fetch(API_URL)
      .then((response) => response.json())
      .catch((error) => {
        console.log("Error", error);
      })
      .then((data) => {
        return data.data;
      });

  //PART OF GETTING DATA FROM OUR DATABASE: OBTAINING/SAVING THE DATA TO A CONST.
  const receivedInstitutions = await getInstitutions();*/
  const stationsUrl = data_information.data.stations.map(
    (station) => `/station_map/${station.station_id}`
  );

  return {
    paths: stationsUrl,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const station_id = params.mapa;

  //const url = API_URL_SLUG(slug);

  let getStation = data_information.data.stations.find(
    (station) => station.station_id == station_id
  );
  let jsonString = JSON.stringify(getStation);
  const stationData = JSON.parse(jsonString);

  {
    /* FETCH METHOD: IN CASE WE ARE GETTING DATA FROM OUR DATABASE (OUR BACK-END)*/
  }
  /*const getInstitutionData = () =>
    fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.log("Error", error);
      })
      .then((data) => data.data);

  const institutionData = await getInstitutionData();*/

  if (!stationData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      stationData,
    },
  };
};
