import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";

{
  /* RETURN THE BACKWARD BUTTON */
}
function PreviousPage_Button() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.back()}
        className="flex justify-items-start items-center"
      >
        <IoIosArrowBack size="25px" />
        <span className="underline text-[15px]">Atrás</span>
      </button>
    </div>
  );
}
export default PreviousPage_Button;
