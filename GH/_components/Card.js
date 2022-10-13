import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import CategoryTag from "./CategoryTag";

function Card({
  name,
  image,
  address,
  phoneNumber,
  web,
  days,
  timetable,
  slug,
  categories,
}) {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-white scroll-p-1 shadow-md rounded-lg overflow-hidden">
      <Link href={`/institution/${slug}`}>
        <a className="w-full sm:max-h-[300px] sm:grid">
          <Image
            width="100%"
            height="100%"
            objectFit="cover"
            layout="responsive"
            objectPosition="center"
            src={image}
            style={{
              objectPosition: "center",
            }}
          />
        </a>
      </Link>
      <div className="w-full p-4 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="uppercase underline font-bold">
            <Link href={`/institution/${slug}`}>
              <a>{name}</a>
            </Link>
          </h2>
          <ul className="leading-loose">
            <li>Dirección: {address}</li>
            <li>Teléfono: {phoneNumber}</li>
            {days ? <li>Días de atención: {days}</li> : null}
            {timetable ? <li>Horario: {timetable}</li> : null}
          </ul>
          <div className="flex gap-1">
            {categories.map((category) => (
              <CategoryTag key={category}>{category}</CategoryTag>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Button ariaLabel="Telefono" hasLink>
            <a href={`tel:${phoneNumber}`}>Llamar</a>
          </Button>
          <div className="">
            <Button ariaLabel="sitio web" variant="empty" hasLink>
              <a href={web} target="_blank" rel="noreferrer">
                Sitio web
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
