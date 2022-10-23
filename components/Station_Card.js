import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { color } from "@mui/system";
import ConditionFile from "./ConditionFile";
import Station_Card_Button from "./Station_Card_Buttons";

export default function Station_Card({
  address,
  tipo_estacion,
  estacion_de_carga,
  num_bicis_disponibles,
  mecanica,
  ebike,
  muelles_bicis_disponibles,
  estado,
  station_id,
}) {
  return (
    <Card sx={{ maxWidth: 650 }}>
      <Link href={`/station_map/${station_id}`}>
        <a>
          <Image
            width="100%"
            height="50%"
            objectFit="cover"
            layout="responsive"
            objectPosition="center"
            src={require("../public/images/bike.png")}
            style={{
              objectPosition: "center",
            }}
          />
        </a>
      </Link>
      <CardContent>
        {/* ADDRESS */}
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="hover:text-red-500"
        >
          <Link href={`/station_map/${station_id}`}>
            <a>{address}</a>
          </Link>
        </Typography>
        {/* TYPE OF STATION */}
        <Typography variant="body2" color="text.secondary" marginBottom={"5px"}>
          ESTACIÓN: {tipo_estacion}
        </Typography>
        {/* IS CHARGING STATION? */}
        <Typography
          variant="body2"
          color={"text.secondary"}
          marginBottom={"5px"}
          className="flex justify-items-start gap-1"
        >
          EVSE: <ConditionFile condition_evse={estacion_de_carga} />
        </Typography>
        {/* NUMBER OF BIKES AVAILABLE */}
        <Typography variant="body2" color="text.secondary" marginBottom={"5px"}>
          BICICLESTAS DISPONIBLES: {num_bicis_disponibles}
        </Typography>
        {/* BIKES DOCKS AVAILABLE */}
        <Typography
          variant="body2"
          color="text.secondary"
          marginBottom={"10px"}
        >
          ANCLAJES DISPONIBLES: {muelles_bicis_disponibles}
        </Typography>
        {/* TYPES OF BIKES AVAILABLE */}
        <Typography variant="body1" color="text.primary" marginBottom={"5px"}>
          TIPOS DE BICICLESTAS DISPONIBLES
        </Typography>
        {/* MECHANICAL BIKES AVAILABLE */}
        <Typography variant="body2" color="text.secondary" marginBottom={"5px"}>
          MECÁNICA: {mecanica}
        </Typography>
        {/* EBIKE BIKES AVAILABLE */}
        <Typography variant="body2" color="text.secondary" marginBottom={"5px"}>
          EBIKE: {ebike}
        </Typography>
        {/* STATION STATUS */}
        <Typography
          variant="body2"
          color="text.secondary"
          className="flex justify-items-start gap-1"
        >
          ESTADO: <ConditionFile condition_status={estado} />
        </Typography>
      </CardContent>
      <CardActions>
        {/* SHARE AND CUSTOMER SERVICE BOTTON*/}
        <Station_Card_Button />
      </CardActions>
    </Card>
  );
}
