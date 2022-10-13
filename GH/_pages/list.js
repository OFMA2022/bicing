import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Card from "../components/Card";
import data from "../data.json";

{
  /* API'S BACK-END (DATABASE) QOVERY EXTERNAL LINK*/
  /*const API_URL =
  "https://z7d7c6145-z5b7a4427-gtw.z897bb54d.blockdev.sh/api/getAll/institutions";*/
}

{
  /* API'S BACK-END (DATABASE) LOCAL EXTERNAL LINK*/
  /*const API_URL = "http://localhost:3001/api/getAll/institutions";*/
}

function list({ institutions, address, institution }) {
  return (
    <div className="max-w-[1400px] ml-auto mr-auto flex flex-col justify-center items-center">
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        <NavBar />
      </div>

      {institutions ? (
        <div className="w-full max-w-[1000px] px-4 md:px-12 md:py-6 flex flex-col gap-4">
          <div className="font-semibold text-xl ">
            {address.includes(undefined)
              ? "Instituciones"
              : `Instituciones cercanas a ${address}`}
          </div>

          {institutions?.map((institution) => (
            <Card
              key={institution.key}
              name={institution.name}
              slug={institution.slug}
              image={institution.image}
              address={institution.address}
              phoneNumber={institution.phoneNumber}
              web={institution.web}
              days={institution.days}
              timetable={institution.timetable}
              categories={institution.categories}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-[calc(100vh-108px)] w-full justify-center items-center">
          <div className="font-bold">
            Lo sentimos, no se encuentran instituciones cercanas
          </div>
        </div>
      )}
    </div>
  );
}

function getDistance(x1, y1, x2, y2) {
  let y = x2 - x1;
  let x = y2 - y1;

  return Math.sqrt(x * x + y * y);
}

export const getServerSideProps = async ({ query }) => {
  {
    /* FETCH METHOD: IN CASE WE ARE GETTING DATA FROM OUR DATABASE (OUR BACK-END)*/
  }
  /*const getInstitutionData = () =>
    fetch(API_URL)
      .then((response) => response.json())
      .catch((error) => {
        console.log("Error", error);
      })
      .then((data) => {
        return data.data;
      });

  const receivedInstitutions = await getInstitutionData();*/

  const MAX_DISTANCE = 1500;
  const { lat, lng, route, street_number } = query;
  const address = route + " " + street_number;
  // search the related institutions
  const institutions = data.filter((institution) => {
    if (!lat || !lng) return institution;

    const distance =
      getDistance(
        +lat,
        +lng,
        institution.direction.lat,
        institution.direction.lng
      ) * 100000;
    // Get the nearest paths
    if (distance < MAX_DISTANCE) return institution;
  });

  return {
    props: {
      institutions,
      address,
    },
  };
};

export default list;
