import data_information from "../data_information.json";
import data_status from "../data_status.json";
import NavBar from "../components/NavBar/NavBar";
import Station_Card from "../components/Station_Card";
import { useState } from "react";
import ScrollUp_Buton from "../components/ScrollUp_Buton";
import PreviousPage_Button from "../components/PreviousPage_Button";

/* EXTERNAL DATA JSON LINK : DATA INFORMATION (FIRST JSON FILE) */
const API_URL_DATA_INFO =
  "https://api.bsmsa.eu/ext/api/bsm/gbfs/v2/en/station_information";

/* EXTERNAL DATA JSON LINK : DATA STATUS (SECOND JSON FILE) */
const API_URL_DATA_STATUS =
  "https://api.bsmsa.eu/ext/api/bsm/gbfs/v2/en/station_status";

//let receivedDataStatus = [];

function list(stations, address) {
  /* DECLARED TO BE ABLE TO SAVE DATA COMPARED OF STATION_ID */
  const [stations_status, setStations_status] = useState([]);

  /* I DECALRED THIS FOR GETTING THE REST OF DETAILS IN THE SECOND JSON FILE BY COMPARING THEM WITH 'STATION_ID'OF THE FIRST JSON FILE */
  data_status.data.stations.filter((station_status) => {
    stations.stations.map((station) => {
      if (station.station_id == station_status.station_id) {
        //console.log("stations statussss baby", station_status);
        //console.log("stations infoo baby", station);
        stations_status.push(station_status);
      }
    });
  });

  //console.log("Stations Status BY stations_status", stations_status);
  //console.log("Stations info", stations.stations);

  /* database stuff */
  //console.log("receeeeebaaaa", receivedDataStatus);

  return (
    <div className="max-w-[1400px] ml-auto mr-auto flex flex-col justify-center items-center">
      {/* NAVBAR */}
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        <NavBar />
      </div>
      {/*  PREVIOUS PAGE - BACK BOTTOM */}
      <div className="mr-auto mb-3">
        <PreviousPage_Button />
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
              num_bicis_disponibles={stations_status[i].num_bikes_available}
              mecanica={stations_status[i].num_bikes_available_types.mechanical}
              ebike={stations_status[i].num_bikes_available_types.ebike}
              muelles_bicis_disponibles={stations_status[i].num_docks_available}
              estado={stations_status[i].status == "IN_SERVICE" ? "SI" : "NO"}
              station_id={station.station_id}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-[calc(100vh-108px)] w-full justify-center items-center">
          <div className="font-bold text-2xl text-center">
            Lo sentimos, no se encuentran estaciones cercanas.
          </div>
        </div>
      )}

      {/* SCROLL UP BUTTON */}
      <div className="mr-auto">
        <ScrollUp_Buton />
      </div>
    </div>
  );
}
export default list;

{
  /* A FUNCTION TO CALCULATE THE DISTANCE */
}
function getDistance(x1, y1, x2, y2) {
  let y = x2 - x1;
  let x = y2 - y1;

  return Math.sqrt(x * x + y * y);
}

{
  /* RECEIVED BY PROPS (query). THE DIRECTION INTRODUCED BY THE USER */
}
export const getServerSideProps = async ({ query }) => {
  /* FETCHING DATA FROM EXTERNAL LINK DATABASE */
  /*const stationDataInfo = (API) =>
    fetch(API)
      .then((response) => response.json())
      .catch((error) => {
        console.log("Error", error);
      })
      .then((data) => {
        return data.data;
      });

  const receivedDataInfo = await stationDataInfo(API_URL_DATA_INFO);
  receivedDataStatus = await stationDataInfo(API_URL_DATA_STATUS);*/

  const MAX_DISTANCE = 1500;

  {
    /* SAVED THE DIRECTION ENTERED BY PROPS (query) INTO THE CONST DECLARED */
    /* SOMEHOW WE'VE GOT THE ADDRES SEPARETELY */
  }
  const { lat, lon, route_address, street_number } = query;
  {
    /* JOINING THE address_route AND THE street_number TO FORM AN COMPLETELY FULL ADDRESS*/
  }
  const address = route_address + " " + street_number;
  {
    /* SEARCH THE RELATED STATIONS */
  }
  const stations = data_information.data.stations.filter((station) => {
    if (!lat || !lon) return station;

    const distance = getDistance(+lat, +lon, station.lat, station.lon) * 100000;
    {
      /* GET THE NEAREST PATHS */
    }
    if (distance < MAX_DISTANCE) return station;
  });

  return {
    props: {
      stations,
      address,
    },
  };
};
