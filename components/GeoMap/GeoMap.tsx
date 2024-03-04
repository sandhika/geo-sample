/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */

import React, { useRef, useEffect, useState } from 'react';
import maplibregl from '-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import classes from './GeoMap.module.css';

export default function GeoMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(106.672272);
  const [lat] = useState(-6.305968);
  const [zoom] = useState(14);
  const [API_KEY] = useState('he7knEJ7AWOG8b7gHghT');

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once
    
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });
    map.current?.addControl(new maplibregl.NavigationControl(), 'top-right');

    //add Marker
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([106.6768566, -6.314725])
      .addTo(map.current);
    
    //add Source
   
    // map.current.on("load", () => {
    //     //
    //   map.addSource('route', {
    //     'type': 'geojson',
    //     'data': {
    //       'type': 'Feature',
    //       'properties': {},
    //       'geometry': {
    //         'type': 'LineString',
    //         'coordinates': [
    //           [
    //             -6.313971,
    //             106.676933
    //           ],
    //           [
    //             -6.313287,
    //             106.677103
    //           ],
    //           [
    //             -6.313118,
    //             106.677191
    //           ],
    //           [
    //             -6.312788,
    //             106.677760
    //           ],
    //           [
    //             -6.2254301,
    //             106.8283070
    //           ]
    //         ]
    //       }
    //     }
    //   });

    //   map.addLayer({
    //     'id': 'route',
    //     'type': 'line',
    //     'source': 'route',
    //     'layout': {
    //       'line-join': 'round',
    //       'line-cap': 'round'
    //     },
    //     'paint': {
    //       'line-color': '#888',
    //       'line-width': 8
    //     }
    //   });

    // });

  }, [API_KEY, lng, lat, zoom]);

 


  return (
      <div className={classes.mapwrap}>
          <div ref={mapContainer} className={classes.map} />
      </div>
  );
}