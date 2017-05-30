import React, { Component } from 'react';
import './MapLeaflet.css';
import '../sprite.css';

import womenArray from '../data/women.json';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

class MapLeaflet extends Component {

  constructor(props) {
    super(props);

    this.state = {
      center: [45.07633865793335,7.676830683921821],
      zoom: 14
    };

    this.openDetails = this.openDetails.bind(this);
    this.onFeatureClick = this.onFeatureClick.bind(this);
  }

  openDetails(data){
    this.closePopup();
    this.props.onOpenDetails(data);
  }

  closePopup(){
    this.setState({popup: null});
  }

  onFeatureClick(data){
    const latLng = [data.lngLat[1],data.lngLat[0]];
    this.setState({popup: null, center: latLng});
    this.setState({popup:
      <Popup position={latLng}>
        <div className="popup-container" style={{backgroundImage: "url("+data.photo+")"}}>
        <span className="popup-info">
          <span>{data.address}</span><br/>
          <span className="popup-info-name">{data.name} {data.surname}</span><br/>
          <span>{data.date}</span>
        </span>
          <a href="#popup" className="popup-go-details" onClick={this.openDetails.bind(this, data)}>SCHEDA &rarr;</a>
        </div>
      </Popup>
    });
  }

  render() {
    const iconFactory = L.divIcon({className: 'marker-factory', iconSize: [26, 31]});
    const iconNewspaper = L.divIcon({className: 'marker-newspaper', iconSize: [26, 31]});
    const iconStone = L.divIcon({className: 'marker-stone', iconSize: [26, 31]});
    const iconWoman = L.divIcon({className: 'marker-woman', iconSize: [26, 31]});
    const iconPartisan = L.divIcon({className: 'marker-partisan', iconSize: [25, 25]});

    const womanFeatures = womenArray.filter((data)=>{return data.address && data.type === "woman"}).map((data) =>
      <Marker key={data._id} position={[data.lngLat[1],data.lngLat[0]]} icon={iconWoman} onClick={this.onFeatureClick.bind(this,data)}/>
    );
    const stoneFeatures = womenArray.filter((data)=>{return data.address && data.type === "stone"}).map((data) =>
      <Marker key={data._id} position={[data.lngLat[1],data.lngLat[0]]} icon={iconStone} onClick={this.onFeatureClick.bind(this,data)}/>
    );
    const partisanFeatures = womenArray.filter((data)=>{return data.address && data.type === "partisan"}).map((data) =>
      <Marker key={data._id} position={[data.lngLat[1],data.lngLat[0]]} icon={iconPartisan} onClick={this.onFeatureClick.bind(this,data)}/>
    );
    const newspaperFeatures = womenArray.filter((data)=>{return data.address && data.type === "newspaper"}).map((data) =>
      <Marker key={data._id} position={[data.lngLat[1],data.lngLat[0]]} icon={iconNewspaper} onClick={this.onFeatureClick.bind(this,data)}/>
    );
    const placeFeatures = womenArray.filter((data)=>{return data.address && data.type === "place"}).map((data) =>
      <Marker key={data._id} position={[data.lngLat[1],data.lngLat[0]]} icon={iconFactory} onClick={this.onFeatureClick.bind(this,data)}/>
    );

    var cartodb = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';
    if (L.Browser.retina)
      cartodb = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}@2x.png';
    var cartodbAttribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>';

    return (
      <div className="leaflet-map-container">
        <Map center={this.state.center} zoom={this.state.zoom}>
          <TileLayer
            url={cartodb}
            attribution={cartodbAttribution}
          />
          {womanFeatures}
          {stoneFeatures}
          {partisanFeatures}
          {newspaperFeatures}
          {placeFeatures}
          {this.state.popup}
        </Map>
      </div>
    );
  }
}
export default MapLeaflet;