function Video({ ruta_video }) {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          width: "1000px",
          height: "350px",
          borderRadius: "12px",
          border: "1px solid red",
        }}
      >
        <source src={ruta_video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
