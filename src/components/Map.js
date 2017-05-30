import React, { Component } from 'react';
import './Map.css';

import styleMap from '../mapbox/styleLocal.json';
import womenArray from '../data/women.json';

import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";
import { AttributionControl } from 'mapbox-gl';

import config from "../config.json";

const { accessToken } = config;

class Map extends Component {

  constructor(props) {
    super(props);

    this.state = {
      center: [7.676830683921821,45.07633865793335],
      zoom: [13],
      pitch: 0,
      pitchNameBtn: "3D",
      popup: null,
      mapObj: null
    };

    this.onFeatureClick = this.onFeatureClick.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.openDetails = this.openDetails.bind(this);
    this.onPlusClick = this.onPlusClick.bind(this);
    this.onMinusClick = this.onMinusClick.bind(this);
    this.onPitchClick = this.onPitchClick.bind(this);
    this.onStyleLoad = this.onStyleLoad.bind(this);
  }

  closePopup(){
    this.setState({popup: null});
  }

  openDetails(data){
    this.closePopup();
    this.props.onOpenDetails(data);
  }

  onPlusClick(){
    this.state.mapObj.zoomTo(this.state.mapObj.getZoom() + 1);
  }

  onMinusClick(){
    this.state.mapObj.zoomTo(this.state.mapObj.getZoom() - 1);
  }

  onPitchClick(){
    if(this.state.pitch === 45)
      this.setState({pitch: 0, pitchNameBtn: "3D"});
    else
      this.setState({pitch: 45, pitchNameBtn: "2D"});
  }

  onFeatureClick(data){
    this.setState({popup: null, center: data.feature.geometry.coordinates});
    this.setState({popup:
      <Popup
        coordinates={data.feature.geometry.coordinates}
        anchor="bottom">
        <div className="popup-container" style={{backgroundImage: "url("+data.feature.properties.photo+")"}}>
          <a href="#popup" className="popup-close" onClick={this.closePopup}>X</a>
          <span className="popup-info">
            <span>{data.feature.properties.address}</span><br/>
            <span className="popup-info-name">{data.feature.properties.name} {data.feature.properties.surname}</span><br/>
            <span>{data.feature.properties.date}</span>
          </span>
          <a href="#popup" className="popup-go-details" onClick={this.openDetails.bind(this, data.feature.properties)}>SCHEDA &rarr;</a>
        </div>
      </Popup>});
  }

  onFeatureEnter(e){
    e.map.getCanvas().style.cursor = 'pointer';
  }

  onFeatureLeave(e){
    e.map.getCanvas().style.cursor = '';
  }

  onStyleLoad(map){
    this.setState({mapObj:map});
    map.addControl(new AttributionControl(), 'bottom-left');
  }

  render() {
    const womanFeatures = womenArray.filter((data)=>{return data.address && data.type === "woman"}).map((data) =>
      <Feature key={data._id} coordinates={data.lngLat} onClick={this.onFeatureClick} properties={data} onMouseEnter={this.onFeatureEnter} onMouseLeave={this.onFeatureLeave}/>
    );
    const stoneFeatures = womenArray.filter((data)=>{return data.address && data.type === "stone"}).map((data) =>
      <Feature key={data._id} coordinates={data.lngLat} onClick={this.onFeatureClick} properties={data} onMouseEnter={this.onFeatureEnter} onMouseLeave={this.onFeatureLeave}/>
    );
    const partisanFeatures = womenArray.filter((data)=>{return data.address && data.type === "partisan"}).map((data) =>
      <Feature key={data._id} coordinates={data.lngLat} onClick={this.onFeatureClick} properties={data} onMouseEnter={this.onFeatureEnter} onMouseLeave={this.onFeatureLeave}/>
    );
    const newspaperFeatures = womenArray.filter((data)=>{return data.address && data.type === "newspaper"}).map((data) =>
      <Feature key={data._id} coordinates={data.lngLat} onClick={this.onFeatureClick} properties={data} onMouseEnter={this.onFeatureEnter} onMouseLeave={this.onFeatureLeave}/>
    );
    const placeFeatures = womenArray.filter((data)=>{return data.address && data.type === "place"}).map((data) =>
      <Feature key={data._id} coordinates={data.lngLat} onClick={this.onFeatureClick} properties={data} onMouseEnter={this.onFeatureEnter} onMouseLeave={this.onFeatureLeave}/>
    );

    if(process.env.NODE_ENV==="production")
      styleMap.sprite = `http://freeda.it${process.env.PUBLIC_URL}/mapbox/sprite`;
    else
      styleMap.sprite = `http://localhost:3000${process.env.PUBLIC_URL}/mapbox/sprite`;

    return (
      <ReactMapboxGl
        style={styleMap}
        attributionControl={false}
        logoPosition="top-left"
        accessToken={accessToken}
        onStyleLoad={this.onStyleLoad}
        center={this.state.center}
        zoom={this.state.zoom}
        pitch={this.state.pitch}
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
        <Layer
          type="symbol"
          id="marker-partisan"
          layout={{ "icon-image": "marker-partisan", "icon-offset": [0,-15], "icon-allow-overlap": false }}>
          {partisanFeatures}
        </Layer>
        <Layer
          type="symbol"
          id="marker-factory"
          layout={{ "icon-image": "marker-factory", "icon-offset": [0,-15], "icon-allow-overlap": true }}>
          {placeFeatures}
        </Layer>
        <Layer
          type="symbol"
          id="marker-stone"
          layout={{ "icon-image": "marker-stone", "icon-offset": [0,-15], "icon-allow-overlap": true }}>
          {stoneFeatures}
        </Layer>
        <Layer
          type="symbol"
          id="marker-woman"
          layout={{ "icon-image": "marker-woman", "icon-offset": [0,-15], "icon-allow-overlap": true }}>
          {womanFeatures}
        </Layer>
        <Layer
          type="symbol"
          id="marker-newspaper"
          layout={{ "icon-image": "marker-newspaper", "icon-offset": [0,-15], "icon-allow-overlap": true }}>
          {newspaperFeatures}
        </Layer>
        {this.state.popup}
        <span className="control-btn-container">
          <button className="control-btn" onClick={this.onPlusClick}>+</button>
          <button className="control-btn control-btn-minus" onClick={this.onMinusClick}>-</button>
          <button className="control-btn control-btn-text" onClick={this.onPitchClick}>{this.state.pitchNameBtn}</button>
        </span>
      </ReactMapboxGl>
    );
  }
}
export default Map;