import data_information from "../data_information.json";
import data_status from "../data_status.json";
import NavBar from "../components/NavBar/NavBar";
import Station_Card from "../components/Station_Card";
import { useState } from "react";
import FloatingButton_BackTop from "../components/FloatingButton_BackTop";

/* EXTERNAL DATA JSON LINK : DATA INFORMATION (FIRST JSON FILE) */
const API_URL_DATA_INFO =
  "https://api.bsmsa.eu/ext/api/bsm/gbfs/v2/en/station_information";

/* EXTERNAL DATA JSON LINK : DATA STATUS (SECOND JSON FILE) */
const API_URL_DATA_STATUS =
  "https://api.bsmsa.eu/ext/api/bsm/gbfs/v2/en/station_status";

let receivedDataStatus = [];

function list(stations, address) {
  /* Array of useState for saving the rest of details in the second file of json */
  const [value, setValues] = useState([]);

  /* I declared this for getting the rest of details in the second json file by comparing them with 'station_id' of the first json file */
  data_status.data.stations.filter((station_status) => {
    stations.stations.map((station) => {
      if (station.station_id == station_status.station_id) {
        //console.log("stations statussss baby", station_status);
        //console.log("stations infoo baby", station);
        value.push(station_status);
      }
    });
  });

  //console.log("Stations Status BY value", value);
  //console.log("Stations info", stations.stations);

  /* database stuff */
  //console.log("receeeeebaaaa", receivedDataStatus);

  return (
    <div className="max-w-[1400px] ml-auto mr-auto flex flex-col justify-center items-center">
      {/* NAVBAR */}
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        <NavBar />
      </div>

      {/* STATIONS */}
      {stations.stations != "" ? (
        <div className="max-w-[1000px] px-4 md:px-12 md:py-6 flex flex-col gap-4">
          {stations.stations?.map((station, i) => (
            <Station_Card
              key={station.station_id}
              address={station.address}
              tipo_estacion={station.physical_configuration}
              estacion_de_carga={
                station.is_charging_station == true ? "SI" : "NO"
              }
              num_bicis_disponibles={value[i].num_bikes_available}
              mecanica={value[i].num_bikes_available_types.mechanical}
              ebike={value[i].num_bikes_available_types.ebike}
              muelles_bicis_disponibles={value[i].num_docks_available}
              estado={value[i].status == "IN_SERVICE" ? "SI" : "NO"}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-[calc(100vh-108px)] w-full justify-center items-center">
          <div className="font-bold text-2xl">
            Lo sentimos, no se encuentran estaciones cercanas.
          </div>
        </div>
      )}
      <FloatingButton_BackTop />
    </div>
  );
}
export default list;

function getDistance(x1, y1, x2, y2) {
  let y = x2 - x1;
  let x = y2 - y1;

  return Math.sqrt(x * x + y * y);
}

//Received by props the direction that the user put in.
export const getServerSideProps = async ({ query }) => {
  /* FETCHING DATA FROM EXTERNAL LINK DATABASE */
  const stationDataInfo = (API) =>
    fetch(API)
      .then((response) => response.json())
      .catch((error) => {
        console.log("Error", error);
      })
      .then((data) => {
        return data.data;
      });

  const receivedDataInfo = await stationDataInfo(API_URL_DATA_INFO);
  receivedDataStatus = await stationDataInfo(API_URL_DATA_STATUS);

  const MAX_DISTANCE = 1500;
  const { lat, lon, route_address, street_number } = query; //Saved the direction in 'const' declared
  const address = route_address + " " + street_number; //Joining the address_route and the street_number to form an completely Full Adderess
  // search the related stations
  const stations = data_information.data.stations.filter((station) => {
    if (!lat || !lon) return station;

    const distance = getDistance(+lat, +lon, station.lat, station.lon) * 100000;
    // Get the nearest paths
    if (distance < MAX_DISTANCE) return station;
  });

  return {
    props: {
      stations,
      address,
    },
  };
};
