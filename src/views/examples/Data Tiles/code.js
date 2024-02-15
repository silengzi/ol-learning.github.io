const title = 'Data Tiles'

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
  import DataTile from 'ol/source/DataTile.js';
  import Map from 'ol/Map.js';
  import TileLayer from 'ol/layer/WebGLTile.js';
  import View from 'ol/View.js';

  const size = 256;

  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext('2d');
  context.strokeStyle = 'white';
  context.textAlign = 'center';
  context.font = '24px sans-serif';
  const lineHeight = 30;

  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new DataTile({
          loader: function (z, x, y) {
            const half = size / 2;
            context.clearRect(0, 0, size, size);
            context.fillStyle = 'rgba(100, 100, 100, 0.5)';
            context.fillRect(0, 0, size, size);
            context.fillStyle = 'black';
            context.fillText(\`z: \${z}\`, half, half - lineHeight);
            context.fillText(\`x: \${x}\`, half, half);
            context.fillText(\`y: \${y}\`, half, half + lineHeight);
            context.strokeRect(0, 0, size, size);
            const data = context.getImageData(0, 0, size, size).data;
            // converting to Uint8Array for increased browser compatibility
            return new Uint8Array(data.buffer);
          },
          // disable opacity transition to avoid overlapping labels during tile loading
          transition: 0,
        }),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 0,
    }),
  });
`

const package_str = `
  {
    "name": "data-tiles",
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