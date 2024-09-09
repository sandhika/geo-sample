import React, { useRef, useEffect, useState } from 'react';


export default function GeoMap() {
  const mapContainer = useRef(null);
  const map = React.useRef(null);

  const [lng] = useState(-122.486052);//106.672272);
  const [lat] = useState( 37.830348 );//-6.305968);
  const [zoom] = useState(14);
  const [API_KEY] = useState('he7knEJ7AWOG8b7gHghT');

  useEffect(() => {

   

  }, [API_KEY, lng, lat, zoom, map]);

 


  return (
      <div className={classes.mapwrap}>
          <div ref={mapContainer} className={classes.map} />

      </div>
  );
}