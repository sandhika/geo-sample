/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */

import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import classes from './GeoMap.module.css';

export default function GeoMap() {
  const mapContainer = useRef(null);
  const map = React.useRef(null);

  const [lng] = useState(106.672272);
  const [lat] = useState(-6.305968);
  const [zoom] = useState(14);
  const [API_KEY] = useState('he7knEJ7AWOG8b7gHghT');

  useEffect(() => {

    if (map.current) return; // stops map from intializing more than once
    
  
    const mapGeo = new maplibregl.Map({
      container: mapContainer && mapContainer?.current ? mapContainer.current : '',
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });
    mapGeo.addControl(new maplibregl.NavigationControl(), 'top-right');

    //add Marker
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([106.6768566, -6.314725])
      .addTo(mapGeo);
    
    //add Source
   
    mapGeo.on("load", (e) => {
    //   console.log("OnLoad Map:",e);
    // // //     //
      // map.current.addSource('routeSample', {
      //   'type': 'geojson',
      //   'data': {
      //     'type': 'Feature',
      //     'properties': {},
      //     'geometry': {
      //       'type': 'LineString',
      //       'coordinates': [
             
      //         [106.6768566, -7.314725],
      //         [106.6768566, -8.314725],
      //         [106.6768566, -9.314725],
      //         [106.6768566, -10.314725]
      //       ]
      //     }
      //   }
      // });

      // map.current.addLayer({
      //   'id': 'route',
      //   'type': 'line',
      //   'source': 'routeSample',
      //   'layout': {
      //     'line-join': 'round',
      //     'line-cap': 'round'
      //   },
      //   'paint': {
      //     'line-color': '#888',
      //     'line-width': 8
      //   }
      // });

      // mapGeo.addSource('contours', {
      //   type: 'vector',
      //   url:
      //     `https://api.maptiler.com/tiles/contours/tiles.json?key=${API_KEY}`
      // });
      // mapGeo.addLayer({
      //   'id': 'terrain-data',
      //   'type': 'line',
      //   'source': 'contours',
      //   'source-layer': 'contour',
      //   'layout': {
      //     'line-join': 'round',
      //     'line-cap': 'round'
      //   },
      //   'paint': {
      //     'line-color': '#ff69b4',
      //     'line-width': 1
      //   }
      // });

    });

  }, [API_KEY, lng, lat, zoom, map]);

 


  return (
      <div className={classes.mapwrap}>
          <div ref={mapContainer} className={classes.map} />
      </div>
  );
}