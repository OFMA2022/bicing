import Image from "next/image";
import { useRouter } from "next/router";
import { useLoadScript } from "@react-google-maps/api";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button";
import Map from "../../components/Map";
import data from "../../data.json" assert { type: "json" };

{
  /* API'S BACK-END (DATABASE) QOVERY EXTERNAL LINK*/
  /*const API_URL =
  "https://z7d7c6145-z5b7a4427-gtw.z897bb54d.blockdev.sh/api/getAll/institutions";
  const API_URL_SLUG = (slug) =>
  `https://z7d7c6145-z5b7a4427-gtw.z897bb54d.blockdev.sh/api/getOne/${slug}`;*/
}

{
  /* API'S BACK-END (DATABASE) LOCAL EXTERNAL LINK*/
  /*const API_URL = "http://localhost:3001/api/getAll/institutions";*/
  /*const API_URL_SLUG = (slug) => `http://localhost:3001/api/getOne/${slug}`;*/
}

function Institution({ institutionData }) {
  const router = useRouter();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  return (
    <div className="max-w-[1400px] ml-auto mr-auto items-center">
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        <NavBar />
      </div>
      <button
        onClick={() => router.back()}
        className="bg-primary-light h-12 flex flex-row items-center w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-primary w-4 h-4 ml-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
          />
        </svg>
        <div className="ml-1 font-semibold">
          <a href="#" />
        </div>
      </button>
      <div className="flex justify-center items-center w-full max-w-[1000px] ml-auto mr-auto  p-4 md:px-12 md:py-6 gap-4">
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col gap-4 lg:gap-0">
            <div className="flex justify-between items-center">
              <div className="uppercase font-bold md:text-2xl">
                {institutionData.name}
              </div>
              <div className="flex justify-end gap-4">
                <Button ariaLabel="Telefono" hasLink>
                  <a href={`tel:${institutionData.phoneNumber}`}>Llamar</a>
                </Button>

                <Button ariaLabel="sitio web" variant="empty" hasLink>
                  <a
                    href={institutionData.web}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sitio web
                  </a>
                </Button>
              </div>
            </div>
            <div className="w-full sm:hidden z-10">
              <Image
                width="100%"
                height="80%"
                objectFit="cover"
                layout="responsive"
                src={institutionData.image}
                alt="Imagen de la institución"
              />
            </div>
            <div className="flex flex-col gap-4 lg:gap-0">
              <div className="flex gap-2 justify-between items-center">
                <ul className="leading-loose">
                  <li>Dirección: {institutionData.address}</li>
                  <li>Teléfono: {institutionData.phoneNumber}</li>
                  {institutionData.days ? (
                    <li>Días de atención: {institutionData.days}</li>
                  ) : null}
                  {institutionData.timetable ? (
                    <li>Horario: {institutionData.timetable}</li>
                  ) : null}
                </ul>
                <div className="w-1/3 hidden sm:block">
                  <Image
                    width="100%"
                    height="80%"
                    objectFit="cover"
                    layout="responsive"
                    src={institutionData.image}
                    alt="Imagen de la institución"
                  />
                </div>
              </div>
              <div className="text-justify mb-8">
                {institutionData.information}
              </div>
              {isLoaded ? (
                <Map
                  typeMarker="unique"
                  direction={institutionData.direction}
                  zoom={16}
                  center={institutionData.direction}
                  mapContainerClassName="map-container-institution"
                />
              ) : (
                <div>cargando</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Institution;

//console.log("DATA JSON details", data);

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
  const institutionUrls = data.map(
    (institution) => `/institution/${institution.slug}`
  );

  return {
    paths: institutionUrls,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.institution;
  //const url = API_URL_SLUG(slug);
  let foundInsti = data.find((x) => x.slug === slug);
  let jsonString = JSON.stringify(foundInsti);
  const institutionData = JSON.parse(jsonString);

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

  if (!institutionData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      institutionData,
    },
  };
};
