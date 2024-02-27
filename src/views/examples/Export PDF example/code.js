const title = 'Export PDF example'

const html_str = `
  <div class="row-fluid">
  <div class="span12">
    <div id="map" class="map"></div>
  </div>
  </div>
  <form class="form">
  <label for="format">Page size </label>
  <select id="format">
    <option value="a0">A0 (slow)</option>
    <option value="a1">A1</option>
    <option value="a2">A2</option>
    <option value="a3">A3</option>
    <option value="a4" selected>A4</option>
    <option value="a5">A5 (fast)</option>
  </select>
  <label for="resolution">Resolution </label>
  <select id="resolution">
    <option value="72">72 dpi (fast)</option>
    <option value="150">150 dpi</option>
    <option value="300">300 dpi (slow)</option>
  </select>
  </form>
  <button id="export-pdf">Export PDF</button>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js"></script>
`

const css_str = `
  .map {
    width: 100%;
    height: 400px;
  }
  .map {
    max-width: 566px;
  }
`

const js_str = `
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import WKT from 'ol/format/WKT.js';
  import {OSM, Vector as VectorSource} from 'ol/source.js';
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

  const raster = new TileLayer({
    source: new OSM(),
  });

  const format = new WKT();
  const feature = format.readFeature(
    'POLYGON((10.689697265625 -25.0927734375, 34.595947265625 ' +
      '-20.1708984375, 38.814697265625 -35.6396484375, 13.502197265625 ' +
      '-39.1552734375, 10.689697265625 -25.0927734375))'
  );
  feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');

  const vector = new VectorLayer({
    source: new VectorSource({
      features: [feature],
    }),
    opacity: 0.5,
  });

  const map = new Map({
    layers: [raster, vector],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  const dims = {
    a0: [1189, 841],
    a1: [841, 594],
    a2: [594, 420],
    a3: [420, 297],
    a4: [297, 210],
    a5: [210, 148],
  };

  const exportButton = document.getElementById('export-pdf');

  exportButton.addEventListener(
    'click',
    function () {
      exportButton.disabled = true;
      document.body.style.cursor = 'progress';

      const format = document.getElementById('format').value;
      const resolution = document.getElementById('resolution').value;
      const dim = dims[format];
      const width = Math.round((dim[0] * resolution) / 25.4);
      const height = Math.round((dim[1] * resolution) / 25.4);
      const size = map.getSize();
      const viewResolution = map.getView().getResolution();

      map.once('rendercomplete', function () {
        const mapCanvas = document.createElement('canvas');
        mapCanvas.width = width;
        mapCanvas.height = height;
        const mapContext = mapCanvas.getContext('2d');
        Array.prototype.forEach.call(
          document.querySelectorAll('.ol-layer canvas'),
          function (canvas) {
            if (canvas.width > 0) {
              const opacity = canvas.parentNode.style.opacity;
              mapContext.globalAlpha = opacity === '' ? 1 : Number(opacity);
              const transform = canvas.style.transform;
              // Get the transform parameters from the style's transform matrix
              const matrix = transform
                .match(/^matrix\(([^]*)\)$/)[1]
                .split(',')
                .map(Number);
              // Apply the transform to the export map context
              CanvasRenderingContext2D.prototype.setTransform.apply(
                mapContext,
                matrix
              );
              mapContext.drawImage(canvas, 0, 0);
            }
          }
        );
        mapContext.globalAlpha = 1;
        mapContext.setTransform(1, 0, 0, 1, 0, 0);
        const pdf = new jspdf.jsPDF('landscape', undefined, format);
        pdf.addImage(
          mapCanvas.toDataURL('image/jpeg'),
          'JPEG',
          0,
          0,
          dim[0],
          dim[1]
        );
        pdf.save('map.pdf');
        // Reset original map size
        map.setSize(size);
        map.getView().setResolution(viewResolution);
        exportButton.disabled = false;
        document.body.style.cursor = 'auto';
      });

      // Set print size
      const printSize = [width, height];
      map.setSize(printSize);
      const scaling = Math.min(width / size[0], height / size[1]);
      map.getView().setResolution(viewResolution / scaling);
    },
    false
  );
`

const package_str = `
  {
    "name": "export-pdf",
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