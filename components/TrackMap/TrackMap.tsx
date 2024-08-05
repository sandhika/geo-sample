/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */

import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import Map, {Marker,Popup} from 'react-map-gl/maplibre';

export default function TrackMap() {
  const [API_KEY] = useState('he7knEJ7AWOG8b7gHghT');
  const [lng] = useState(106.672272);
  const [lat] = useState(-6.305968);
  
  const [latTruck] = useState(-6.314725);
  const [lngTruck] = useState(106.6768566);
  const [showPopup, setShowPopup] = useState<boolean>(true);
  
  const [zoom] = useState(14);  
    return (
      <>
        <Map
          initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: zoom
          }}
          mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`}
          style={{height:"800px"}}
        >
          <Marker longitude={lngTruck} latitude={latTruck} anchor="bottom"  >
            <img  src="./delivery-truck-svgrepo-com.svg" onClick={()=> setShowPopup(true) } />
          </Marker>
          
          {showPopup && (
              <Popup longitude={lngTruck} latitude={latTruck+0.0012}
                 anchor="bottom"
                 onClose={() => setShowPopup(false)} >
                 B 44II IK
               </Popup>)}
            
        
               
        </Map></>

    );
   
}