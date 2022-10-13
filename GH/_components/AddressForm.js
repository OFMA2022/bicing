import AutoComplete from "react-google-autocomplete";
import { useFormikContext } from "formik";

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

const AddressForm = ({ values, ACCOUNT_FIELDS }) => {
  const { setFieldValue } = useFormikContext();

  const handlePlaceSelected = (place) => {
    const route = place.address_components.find((a) =>
      a.types.includes("route")
    )?.long_name;
    const street_number = place.address_components.find((a) =>
      a.types.includes("street_number")
    )?.long_name;
    setFieldValue("business_address", route + " " + street_number);

    const postal_code = place.address_components.find((a) =>
      a.types.includes("postal_code")
    )?.long_name;
    setFieldValue("zip_code", postal_code);

    const city = place.address_components.find((a) =>
      a.types.includes("locality")
    )?.long_name;
    setFieldValue("city", city);

    const province = place.address_components.find((a) =>
      a.types.includes("administrative_area_level_1")
    )?.long_name;
    setFieldValue("province", province);

    const country = place.address_components.find((a) =>
      a.types.includes("country")
    )?.long_name;
    setFieldValue("country", country);

    setFieldValue("google_id", place.place_id);
    if (place?.geometry?.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setFieldValue("latitude", lat);
      setFieldValue("longitude", lng);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-2" ref={ref}>
        <div>
          <span className="block text-input leading-5 text-black mb-1">
            Tu dirección
          </span>

          <AutoComplete
            apiKey={GOOGLE_API_KEY}
            defaultValue={
              (values.business_address ? values.business_address + ", " : "") +
              (values.city ? values.city + ", " : "") +
              (values.province ? values.province + ", " : "") +
              (values.country ? values.country : "")
            }
            onPlaceSelected={handlePlaceSelected}
            className="rounded-lg px-2 py-1  w-full border border-solid border-gray-200  transition ease-in-out focus:border-input-border-focus focus:outline-none hover:border-input-border-hover focus:shadow-input-focus"
            options={{
              types: ["address"],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AddressForm;
