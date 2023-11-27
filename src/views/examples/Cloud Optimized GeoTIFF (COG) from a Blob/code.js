const title = 'Cloud Optimized GeoTIFF (COG) from a Blob'

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

  fetch('data/example.tif')
    .then((response) => response.blob())
    .then((blob) => {
      const source = new GeoTIFF({
        sources: [
          {
            blob: blob,
          },
        ],
      });

      const map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: source,
          }),
        ],
        view: source.getView().then((viewConfig) => {
          viewConfig.showFullExtent = true;
          return viewConfig;
        }),
      });
    });
`

const package_str = `
  {
    "name": "cog-blob",
    "dependencies": {
      "ol": "8.2.0"
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