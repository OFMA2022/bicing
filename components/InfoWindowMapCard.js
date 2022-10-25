import classnames from "classnames";
import InfoWindowMapCardStatus from "./InfoWindoMapCardStatus";

function InfoWindowMapCard({ stations, stations_status }) {
  const container = classnames(
    "text-lg sm:text-2xl text-center mt-5 font-bold"
  );

  return (
    <div className="w-full p-4 flex flex-col justify-center items-center">
      {/* STATION ID */}
      <InfoWindowMapCardStatus stations_status={stations_status} />
      {/* ADDRESS  */}
      <h2 className="uppercase text-lg sm:text-3xl font-bold">
        {stations.address}
      </h2>
      <div className="w-full p-4 flex justify-items-start justify-center items-center gap-6 sm:gap-28">
        <div>
          {/* BIKES */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            fill="#e93030"
          >
            <path d="M9.7 40q-4.05 0-6.875-2.85T0 30.25q0-4.05 2.85-6.875t6.9-2.825q3.55 0 6.225 2.275T19.2 28.6h2.55L17.65 17H14v-3h9.4v3h-2.6l1.3 3.55h11.1L29.65 11H24.4V8h4.95q1.2 0 2.025.55T32.6 10.2l3.8 10.35h1.9q4.05 0 6.875 2.8T48 30.15q0 4.05-2.825 6.95Q42.35 40 38.3 40q-3.6 0-6.3-2.4-2.7-2.4-3.3-6h-9.5q-.55 3.6-3.225 6T9.7 40Zm0-3q2.4 0 4.175-1.55t2.375-3.85H10.3v-3h5.95q-.6-2.25-2.4-3.65-1.8-1.4-4.1-1.4-2.8 0-4.775 1.95Q3 27.45 3 30.25t1.95 4.775Q6.9 37 9.7 37Zm15.25-8.4h3.8q.2-1.15.775-2.55t1.575-2.5h-7.95ZM38.3 37q2.8 0 4.75-1.975Q45 33.05 45 30.25q0-2.8-1.95-4.75-1.95-1.95-4.75-1.95h-.8l1.95 5.65-2.8.95-2.15-5.6q-1.45.85-2.175 2.4-.725 1.55-.725 3.3 0 2.8 1.95 4.775Q35.5 37 38.3 37ZM9.65 30.25Zm28.65 0Z" />
          </svg>
          <div className={container}>{stations_status.num_bikes_available}</div>
        </div>
        <div>
          {/* ANCLAJES */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            fill="#e93030"
          >
            <path d="M16 46v-3h16v3Zm-2-6q-1.2 0-2.1-.9-.9-.9-.9-2.1V5q0-1.2.9-2.1.9-.9 2.1-.9h20q1.2 0 2.1.9.9.9.9 2.1v32q0 1.2-.9 2.1-.9.9-2.1.9Zm0-6v3h20v-3Zm0-3h20V11H14Zm0-23h20V5H14Zm0 0V5v3Zm0 26v3Z" />
          </svg>
          <div className={container}>{stations_status.num_docks_available}</div>
        </div>
        <div>
          {/* E-BIKES */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            fill="#e93030"
          >
            <path d="M9.65 34q-4.05 0-6.875-2.85t-2.825-6.9q0-4.05 2.85-6.875t6.9-2.825q3.55 0 6.225 2.275T19.15 22.6h2.55L17.6 11h-3.65V8h9.4v3h-2.6l1.3 3.55h11.1L29.6 5h-5.25V2h4.95q1.2 0 2.025.55T32.55 4.2l3.8 10.35h1.9q4.05 0 6.875 2.8t2.825 6.8q0 4.05-2.825 6.95Q42.3 34 38.25 34q-3.6 0-6.3-2.4-2.7-2.4-3.3-6h-9.5q-.55 3.6-3.225 6T9.65 34Zm0-3q2.4 0 4.175-1.55T16.2 25.6h-5.95v-3h5.95q-.6-2.25-2.4-3.65-1.8-1.4-4.1-1.4-2.8 0-4.775 1.95-1.975 1.95-1.975 4.75t1.95 4.775Q6.85 31 9.65 31Zm15.25-8.4h3.8q.2-1.15.775-2.55t1.575-2.5H23.1ZM38.25 31q2.8 0 4.75-1.975 1.95-1.975 1.95-4.775 0-2.8-1.95-4.75-1.95-1.95-4.75-1.95h-.8l1.95 5.65-2.8.95-2.15-5.6q-1.45.85-2.175 2.4-.725 1.55-.725 3.3 0 2.8 1.95 4.775Q35.45 31 38.25 31ZM25.8 46l-11.15-5.65H22v-3.8l11.35 5.7H25.8ZM9.6 24.25Zm28.65 0Z" />
          </svg>
          <div className={container}>
            {stations_status.num_bikes_available_types.ebike}
          </div>
        </div>
      </div>
    </div>
  );
}
export default InfoWindowMapCard;
