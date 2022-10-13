import React from "react";
import Link from "next/link";
import Button from "../components/Button";
import CategoryTag from "./CategoryTag";

function InfoWindowCard({ institution }) {
  return (
    <div className="w-full p-4 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="uppercase underline text-lg font-bold">
          <Link href={`/institution/${institution.slug}`}>
            <a>{institution.name}</a>
          </Link>
        </h2>
        <ul className="leading-loose">
          <li>Dirección: {institution.address}</li>
          <li>Teléfono: {institution.phoneNumber}</li>
          {institution.days ? (
            <li>Días de atención: {institution.days}</li>
          ) : null}
          {institution.timetable ? (
            <li>Horario: {institution.timetable}</li>
          ) : null}
        </ul>
        <div className="flex gap-1">
          {institution.categories.map((category) => (
            <CategoryTag key={category}>{category}</CategoryTag>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <Button ariaLabel="Telefono" mapCard>
          <a href={`tel:${institution.phoneNumber}`}>Llamar</a>
        </Button>
        <div className="">
          <Button ariaLabel="sitio web" variant="empty" mapCard>
            <a href={institution.web} target="_blank" rel="noreferrer">
              Sitio web
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InfoWindowCard;
