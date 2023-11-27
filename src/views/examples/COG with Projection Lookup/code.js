const title = 'COG with Projection Lookup'

const html_str = `
  <div id="map" class="map"></div>
`

const css_str = `
  .map {
    width: 100%;
    height: 400px;
  }
`

const js_str = `
  import GeoTIFF from 'ol/source/GeoTIFF.js';
  import Map from 'ol/Map.js';
  import TileLayer from 'ol/layer/WebGLTile.js';
  import XYZ from 'ol/source/XYZ.js';
  import proj4 from 'proj4';
  import {
    epsgLookupMapTiler,
    fromEPSGCode,
    register,
    setEPSGLookup,
  } from 'ol/proj/proj4.js';

  const key = 'Get your own API key at https://www.maptiler.com/cloud/';
  const attributions =
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

  register(proj4);
  setEPSGLookup(epsgLookupMapTiler(key));

  const cogSource = new GeoTIFF({
    sources: [
      {
        url: 'https://mikenunn.net/data/MiniScale_(std_with_grid)_R23.tif',
        nodata: 0,
      },
    ],
  });

  cogSource.setAttributions(
    'Contains OS data © Crown Copyright and database right ' +
      new Date().getFullYear()
  );

  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new XYZ({
          attributions: attributions,
          url:
            'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=' + key,
          maxZoom: 20,
          crossOrigin: '',
        }),
        style: {exposure: 0.2},
      }),
      new TileLayer({
        source: cogSource,
        opacity: 0.7,
        style: {gamma: 0.7},
      }),
    ],
    view: cogSource
      .getView()
      .then((viewConfig) =>
        fromEPSGCode(viewConfig.projection.getCode()).then(() => viewConfig)
      ),
  });
`

const package_str = `
  {
    "name": "cog-projection",
    "dependencies": {
      "ol": "8.2.0",
      "proj4": "2.9.2"
    },
    "devDependencies": {
      "vite": "^3.2.3"
    },
    "scripts": {
      "start": "vite",
      "build": "vite build"
    }
  }
`
export {
  title, 
  html_str,
  css_str,
  js_str,
  package_str
}