import Link from "next/link";

function Description_Bloc() {
  return (
    <div>
      <div className="bg-[#000000] mt-[5px] rounded-[12px]">
        <div className="text-white flex flex-wrap md:flex-nowrap gap-8 sm:gap-4 w-full p-20">
          <div className="text-5xl">
            Te explicamos cómo vincular tu abono a la nueva app Smou.
          </div>
          <Link href="/">
            <a>
              <button className="bn632-hover bn27">Info</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Description_Bloc;
