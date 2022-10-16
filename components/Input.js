import React from "react";
import { useState } from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.autocomplete = null;
  }
  initialState() {
    return {
      complete_address: "",
      street_address: "",
      street_number: "",
      city: "",
      post_code: "",
      lat: "",
      lng: "",
    };
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handlePlaceSelect() {
    let addressObject = this.autocomplete.getPlace();
    //const [direction, setDirection] = useState();
    let address = addressObject.address_components;
    let lat_lng = addressObject.geometry.location;

    /*const complete_address = addressObject.name; //carrer joan miro, 14
    const street_address = address[1].long_name; //carrer joan miro
    const street_number = address[0].long_name; //14
    const city = address[3].long_name; //Barcelona
    const post_code = address[6].long_name; //08110
    const lat = lat_lng.lat(); //latitude
    const lng = lat_lng.lng(); //longitud*/

    this.setState({
      complete_address: addressObject.name, //carrer joan miro, 14
      street_address: address[1].long_name, //carrer joan miro
      street_number: address[0].long_name, //14
      city: address[3].long_name, //Barcelona
      post_code: address[6].long_name, //08110
      lat: lat_lng.lat(), //latitude
      lng: lat_lng.lng(), //longitud
    });
    console.log("let fuc goooo", lat, lng, street_address, street_number);
    //setDirection({ lat, lng, street_address, street_number });
  }
  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      {}
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  }

  render() {
    return (
      <div>
        <div className="search-box">
          <button className="btn-search">
            <i className="fas fa-search"></i>
          </button>
          <input
            id="autocomplete"
            type="text"
            className="input-search"
            placeholder="Type to Search..."
          />
        </div>
      </div>
    );
  }
}

export default Input;
