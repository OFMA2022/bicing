import "../styles/global.css";
import Head from "next/head";
import "../styles/estilos.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bicing</title>
        <link rel="icon" href="/bici-bicing.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800&family=Satisfy&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        {/* PARA EL ARCHIVO Input.js */}
        {/*<script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCBA8Cl-J6S7FMpzqyLzekSPlcs6fqgkcU&libraries=places"
          async
          defer
  ></script>*/}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
