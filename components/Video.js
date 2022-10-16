function Video({ ruta_video }) {
  return (
    <div>
      <video autoPlay loop muted style={{ width: "1000px", height: "350px" }}>
        <source src={ruta_video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
