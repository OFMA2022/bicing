import data_information from "../data_information.json";
import data_status from "../data_status.json";
import NavBar from "../components/NavBar/NavBar";
import Station_Card from "../components/Station_Card";

function list(stations, address) {
  /* I declared this const for getting the rest of information in the second json file */
  const stations_status = data_status.data.stations.filter((station_status) => {
    stations.stations.map((station) => {
      if (station.station_id == station_status.station_id) {
        //console.log("stations statussss baby", station_status);
        //console.log("stations infoo baby", station);
        return station_status;
      }
    });
  });

  /* Saving every single element by map and returning it */
  const getStationStatus = stations_status.map((station_status) => {
    return station_status;
  });

  return (
    <div className="max-w-[1400px] ml-auto mr-auto flex flex-col justify-center items-center">
      {/* NAVBAR */}
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        <NavBar />
      </div>

      {/* STATIONS */}
      {stations ? (
        <div className="max-w-[1000px] px-4 md:px-12 md:py-6 flex flex-col gap-4">
          {stations.stations?.map((station) => (
            <Station_Card
              key={station.station_id}
              address={station.address}
              tipo_estacion={station.physical_configuration}
              estacion_de_carga={station.is_charging_station}
              num_bicis_disponibles={getStationStatus.num_bikes_available}
              num_tipos_bicis_disponibles={
                getStationStatus.num_bikes_available_types
              }
              muelles_bicis_disponibles={getStationStatus.num_docks_available}
              estado={getStationStatus.status}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-[calc(100vh-108px)] w-full justify-center items-center">
          <div className="font-bold">
            Lo sentimos, no se encuentran estaciones cercanas
          </div>
        </div>
      )}
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
