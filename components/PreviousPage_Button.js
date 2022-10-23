import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";

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
