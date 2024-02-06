const title = 'Custom map element'

const html_str = `
  <ol-map id="map" class="map"></ol-map>
`

const css_str = `
  .map {
    width: 100%;
    height: 400px;
  }
`

const js_str = `
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';

  class OLComponent extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({mode: 'open'});
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', 'https://openlayers.org/en/latest/examples/theme/ol.css');
      this.shadow.appendChild(link);
      const style = document.createElement('style');
      style.innerText = \`
        :host {
          display: block;
        }
      \`;
      this.shadow.appendChild(style);
      const div = document.createElement('div');
      div.style.width = '100%';
      div.style.height = '100%';
      this.shadow.appendChild(div);

      this.map = new Map({
        target: div,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
    }
  }

  customElements.define('ol-map', OLComponent);
`

const package_str = `
  {
    "name": "es2015-custom-element",
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