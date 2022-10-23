function STATION_ID({ stations_status }) {
  if (stations_status.status == "IN_SERVICE") {
    return (
      <div className="STATION_IN_SERVICE mb-5">
        {stations_status.station_id}
      </div>
    );
  } else {
    return (
      <div className="STATION_NOT_IN_SERVICE mb-5">
        {stations_status.station_id}
      </div>
    );
  }
}

export default STATION_ID;
