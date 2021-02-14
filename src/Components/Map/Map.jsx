import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

export class SimpleMap extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
     
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
     
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };

  render() {
    return (
      <Map
        style={{ width: "90vw", height: "70vh", margin: "30px auto", border: "2px solid #343A40" }}
        initialCenter={{ lat: 41.15727, lng: 1.1095 }}
        zoom={18}
        google={this.props.google}
        onClick={this.onMapClicked}
      >
         <Marker onClick={this.onMarkerClick}
                name={'Anna Ferran Restauració'} 
                />
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h3>{this.state.selectedPlace.name}</h3>
              <p>Carrer del Doctor Robert, 20, 43201 Reus, Tarragona</p>
              <img src={'https://cloud10.todocoleccion.online/libros-antiguos-religion/tc/2018/05/05/00/120003558_1525472101.jpg'} alt={this.state.selectedPlace.name}/>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEKEY,
})(SimpleMap);
