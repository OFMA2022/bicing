import { useMemo } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/Map";
import NavBar from "../components/NavBar/NavBar";
import data from "../data.json";

function InstitutionsMap({ institutions }) {
  const center = useMemo(() => ({ lat: 41.3986526, lng: 2.1613738 }), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });
  return (
    <div className="max-w-[1400px] ml-auto mr-auto flex flex-col justify-center items-center">
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        <NavBar />
      </div>
      <div className="w-full px-4 md:px-12 md:py-6 flex flex-col gap-4">
        {isLoaded ? (
          <Map
            institutions={institutions}
            typeMarker="all"
            zoom={12}
            center={center}
            mapContainerClassName="map-container"
          />
        ) : (
          <div>cargando</div>
        )}
      </div>
    </div>
  );
}

export default InstitutionsMap;

export const getStaticProps = () => {
  return {
    props: {
      institutions: data,
    },
  };
};
