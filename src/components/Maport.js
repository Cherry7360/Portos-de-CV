
import Map,{Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Portos from'./Portos'

export default function Maport(){

  const [zoom, setZoom] = useState(6);
  const mapContainer = useRef(null);
  const map = useRef(null);


  const [coordenadas,setCordenadas]= useState([-22.918 ,16.177 ])
  function flyTo(coordenadas) {
    map.current.flyTo(
      {
        center: coordenadas,
        zoom: 12
      }
    )
    
  }


  mapboxgl.accessToken = 'pk.eyJ1IjoiYXZsaXNvbnRhcyIsImEiOiJjbGdqc2Izc2gxOHRlM2pteTRjN2VwZGl6In0.kjVMPGz-uOf76SLj7A0mPw';

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: coordenadas,
    zoom: zoom
    });
    });

 
        return(
          <div>
          <div ref={mapContainer} className="map-container" />
          <Portos selecionarPortos={flyTo}/>
          </div>
        )
    }
    