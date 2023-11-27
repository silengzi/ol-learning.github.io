const title = 'Custom Controls'

const html_str = `
  <div id="map" class="map"></div>
`

const css_str = `
  .map {
    width: 100%;
    height: 400px;
  }
  .rotate-north {
    top: 65px;
    left: .5em;
  }
  .ol-touch .rotate-north {
    top: 80px;
  }
`

const js_str = `
  import Map from 'ol/Map.js';
  import OSM from 'ol/source/OSM.js';
  import TileLayer from 'ol/layer/Tile.js';
  import View from 'ol/View.js';
  import {Control, defaults as defaultControls} from 'ol/control.js';

  //
  // Define rotate to north control.
  //

  class RotateNorthControl extends Control {
    /**
     * @param {Object} [opt_options] Control options.
     */
    constructor(opt_options) {
      const options = opt_options || {};

      const button = document.createElement('button');
      button.innerHTML = 'N';

      const element = document.createElement('div');
      element.className = 'rotate-north ol-unselectable ol-control';
      element.appendChild(button);

      super({
        element: element,
        target: options.target,
      });

      button.addEventListener('click', this.handleRotateNorth.bind(this), false);
    }

    handleRotateNorth() {
      this.getMap().getView().setRotation(0);
    }
  }

  //
  // Create map, giving it a rotate to north control.
  //

  const map = new Map({
    controls: defaultControls().extend([new RotateNorthControl()]),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 3,
      rotation: 1,
    }),
  });
`

const package_str = `
  {
    "name": "custom-controls",
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