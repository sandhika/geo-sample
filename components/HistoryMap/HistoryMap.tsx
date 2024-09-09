/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */

import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import Map, {Layer,Marker,Popup,GeolocateControl} from 'react-map-gl/maplibre';
import type {FillLayer,LineLayer} from 'react-map-gl/maplibre';
import type {FeatureCollection} from 'geojson';


export default function HistoryMap() {
  const [API_KEY] = useState('he7knEJ7AWOG8b7gHghT');
  const [lng] = useState(106.672272);
  const [lat] = useState(-6.305968);
  
  const [latTruck] = useState(-6.314725);
  const [lngTruck] = useState(106.6768566);
  const [showPopup, setShowPopup] = useState<boolean>(true);

  const parkLayer: FillLayer = {
    id: 'landuse_park',
    type: 'fill',
    source: 'mapbox',
    'source-layer': 'landuse',
    filter: ['==', 'class', 'park'],
    paint: {
      'fill-color': '#4E3FC8'
    }
  };

  const trackLayer: LineLayer = {
    id: 'landuse_park',
    type: 'fill',
    source: 'mapbox',
    'source-layer': 'landuse',
    filter: ['==', 'class', 'park'],
    paint: {
      'fill-color': '#4E3FC8'
    }
  };

  const geojson: FeatureCollection = {
    type: 'FeatureCollection',
    features: [
      {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
    ]
  };

  const [zoom] = useState(14);  
    return (
      <>
        <Map
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14
          }}
          mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`}
          
          style={{height:"800px"}}
        >
        
            
        
                <Layer {...parkLayer} />
                <GeolocateControl />
        </Map></>

    );
   
}