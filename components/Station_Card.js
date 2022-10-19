import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function Station_Card(
  address,
  tipo_estacion,
  estacion_de_carga,
  num_bicis_disponibles,
  num_tipos_bicis_disponibles,
  muelles_bicis_disponibles,
  estado
) {
  return (
    <Card sx={{ maxWidth: 650 }}>
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
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Station
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
