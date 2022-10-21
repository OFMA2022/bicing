function Station_Card_Button() {
  return (
    <div className="container">
      <div className="share-window">
        <div className="share-bar">
          {/* ALL SOCIAL MEDIA BUTTONS */}
          <div className="trigger">
            <a href="">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <div className="trigger">
            <a href="">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="trigger">
            <a href="">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
          <div className="trigger">
            <a href="">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="trigger">
            <a href="">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          <div className="trigger">
            <a href="">
              <i className="fas fa-paper-plane"></i>
            </a>
          </div>
        </div>
      </div>
      {/* SHARE BUTTON */}
      <div className="share">
        <div className="trigger share-btn">
          <a href="">
            <i className="fas fa-plus"></i> Compartir
          </a>
        </div>
      </div>
      {/* CUSTOMER SERVICE BUTTON */}
      <div className="customer_service">
        <div className="trigger like-btn">
          <a href={`tel: 937 07 89 00`}>
            <i className="fas fa-phone-alt" aria-label="Telefono"></i> Llamar
          </a>
        </div>
      </div>
    </div>
  );
}

export default Station_Card_Button;
