import styles from './work-surface-map.module.css';

import React, { useEffect, useState } from 'react';
// @ts-ignore
import L from 'leaflet';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import { GeoJsonObject } from 'geojson';

/* eslint-disable-next-line */
export interface WorkSurfaceMapProps {
  orgSolutionFile: GeoJsonObject | GeoJsonObject[] | undefined;
}

export interface GeoDataSolutionProps {
  data: GeoJsonObject | GeoJsonObject[] | undefined;
}

const clickedOnFeature = (e: L.DomEvent.PropagableEvent) => {
  L.DomEvent.stopPropagation(e);
  alert('click on json');
};

const GeoDataSolution = (geoDataProps: GeoDataSolutionProps) => {
  const map = useMap();
  const data = geoDataProps.data;

  if (data) {
    // TODO:Check on the type for below data which is currently being ignored
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    //console.log(data);
    const geoJsonObject = L.geoJSON(data, {
      style: {
        color: '#ff7800',
        weight: 1.5,
        opacity: 1,
        fillOpacity: 0,
      },
      onEachFeature: function (feature, layer) {
        layer.on({
          click: clickedOnFeature,
        });
      },
    });
    map.fitBounds(geoJsonObject.getBounds());
    //geojsonObject.addTo(map);
    //console.log(geojsonObject);

    // @ts-ignore
    return <GeoJSON data={data} />;
  } else {
    return null;
  }
};

export function WorkSurfaceMap(props: WorkSurfaceMapProps) {
  const [geoData, setGeoData] = useState<
    GeoJsonObject | GeoJsonObject[] | undefined
  >(props.orgSolutionFile);

  useEffect(() => {
    console.log(props.orgSolutionFile);
    setGeoData(props.orgSolutionFile);
  }, [props.orgSolutionFile]);

  //TODO: Add function to have an onclick for map to select none, one or more polygons.

  return (
    <div id="map_canvas" className="mapCanvas">
      <MapContainer
        id="map-id"
        doubleClickZoom={false}
        zoom={5}
        style={{ height: '50ch', width: '20vh', padding: '5' }}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />
        <GeoDataSolution data={geoData} />
      </MapContainer>
    </div>
  );
}

export default WorkSurfaceMap;
