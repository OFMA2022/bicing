import { useState } from "react";
import myFetch from "../../components/myFetch";

/* EXTERNAL DATA API : DATA INFORMATION */
const API_URL_DATA_INFO = process.env.API_URL_DATA_INFO;
/* EXTERNAL DATA API : DATA STATUS */
const API_URL_DATA_STATUS = process.env.API_URL_DATA_STATUS;

/*function form(req, res) {*/
/*const [stations_info, setStations_info] = useState([]);
  const [stations_status, setStations_status] = useState([]);*/

//const body = req.body;

//console.log("THIS MY BODY: ", body.num_estacion);

/*const { data_info, error } = myFetch(API_URL_DATA_INFO);

  console.log("data info", data_info);*/
// console.log("my handler shit", stationNumber);
/*}
export default form;*/

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("THIS MY BODY: ", body.num_estacion);

  /*data_information.data.stations.map((station) => {
    data_status.data.stations.map((station_status) => {
      if (
        body.num_estacion == station.station_id &&
        body.num_estacion == station_status.station_id
      ) {
        stations.push(station);
        stationsStatus.push(station_status);
      }
    });
  });*/

  /*const getDatat = ({ data_info }) => {
    console.log("data info", data_info);
  };*/

  /*const { data_info } = myFetch(API_URL_DATA_INFO);*/

  //console.log("data info", data_info);

  //console.log("STATIONS NORMALES", stations);
  //console.log("STATIONS DE STATUS", stationsStatus);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  /*if (!body.num_estacion) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Station Number not found" });
  }*/

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.num_estacion}` });
  return body.num_estacion;
}

export const getStaticProps = async () => {
  /* FETCHING DATA FROM EXTERNAL API */
  const res = await fetch(API_URL_DATA_INFO);
  const data_info = await res.json();

  /* FETCHING DATA FROM EXTERNAL API */
  const res_status = await fetch(API_URL_DATA_STATUS);
  const data_status = await res_status.json();

  return {
    props: {
      data_info,
      data_status,
    },
  };
};
