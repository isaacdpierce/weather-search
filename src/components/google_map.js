import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon 
        // lng: is the key Google maps expects  
        // lon: is what our weather api gives us for a longitude key
      }
    });
  }
  render() {
    // React ref property allows us to use this.refs.map to 'reference' this HTML element
    return <div ref="map"></div>
  }
}

export default GoogleMap;
