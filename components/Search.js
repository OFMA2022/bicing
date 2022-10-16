import { useState } from "react";
import React from "react";
import AutoComplete from "react-google-autocomplete";
import { useRouter } from "next/router";

{
  /* API KEY */
}
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

function Search() {
  const router = useRouter();
  const [direction, setDirection] = useState();

  {
    /* handlePlaceSelected : GET LATITUDE, LONGITUD & AND COMPLETE ADDRESS INTRODUCED BY USER*/
  }
  const handlePlaceSelected = (place) => {
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    const route = place.address_components.find((a) =>
      a.types.includes("route")
    )?.long_name;
    const street_number = place.address_components.find((a) =>
      a.types.includes("street_number")
    )?.long_name;
    //console.log("THE ROUTE", lat, lng, route, street_number);
    setDirection({ lat, lng, route, street_number });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push({ pathname: "/", query: direction });
          // TODO: Do the search and redirect to the correct page.
          // Use the direction state, to redirect the user to the correct page.
        }}
        className="flex justify-between gap-2 w-full h-full"
      >
        {/* INPUT BUTTON */}
        <div className="search-box">
          <button className="btn-search">
            <i className="fas fa-search"></i>
          </button>
          <AutoComplete
            apiKey={GOOGLE_API_KEY}
            onPlaceSelected={handlePlaceSelected}
            className="input-search"
            //placeholder="Type to Search..."
            options={{
              types: ["address"],
              componentRestrictions: { country: "es" },
            }}
          />
        </div>
        {/* SEARCH BUTTON */}
        <button className=" bn54">
          <span className="bn54span">Buscar</span>
        </button>
      </form>
    </div>
  );
}
export default Search;
