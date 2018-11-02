import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  
    //state ={coords: this.props.coords};

  
    render() {
    console.log('google message', this.props.coords);
    //centerMap = this.props.coords;
    const style = {
        width: '100%',
        height: '100%'
      }
    return (
       
      
        <Map
        google={this.props.google}
        style={style}
        center={ this.props.coords }
        zoom={15}
        onClick={this.onMapClicked}
      >
  
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
      
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDo56jyiyQIDMCd9KXkAjTNKQ0avgJ9clU')
})(MapContainer)