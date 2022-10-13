import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card";
import data from "../../data.json";

{
  /* API'S BACK-END (DATABASE) QOVERY EXTERNAL LINK*/
}
/*const API_URL =
  "https://z7d7c6145-z5b7a4427-gtw.z897bb54d.blockdev.sh/api/getAll/institutions";*/

{
  /* API'S BACK-END (DATABASE) LOCAL EXTERNAL LINK*/
}
/*const API_URL = "http://localhost:3001/api/getAll/institutions";*/

function Page({ category, institutions }) {
  return (
    <div className="max-w-[1400px] ml-auto mr-auto flex flex-col justify-center items-center">
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        <NavBar />
      </div>
      <div className="w-full max-w-[1000px] px-4 md:px-12 md:py-6 flex flex-col gap-4">
        {institutions?.map((institution) => (
          <Card
            key={category + institution.key}
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
    </div>
  );
}
export default Page;
{
  /* FETCH METHOD: IN CASE WE ARE GETTING DATA FROM OUR DATABASE (OUR BACK-END)*/
}
/*const getInstitutions = () =>
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => {
      console.log("Error", error);
    });*/

function createRandomKey() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export const getStaticPaths = () => {
  return {
    paths: [
      "/category/ropa",
      "/category/juguetes",
      "/category/alimentos",
      "/category/muebles",
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const category = params.category;
  //PART OF GETTING DATA FROM OUR DATABASE: OBTAINING/SAVING THE DATA TO A CONST.
  //const receivedInstitutions = await getInstitutions();
  const institutions = data.filter((institution) =>
    institution.categories.includes(category)
  );
  return {
    props: {
      category,
      institutions: institutions.map((i) => ({ ...i, key: createRandomKey() })),
    },
  };
};
