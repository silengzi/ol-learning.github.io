const title = 'd3 Integration'

const html_str = `
  <div id="map" class="map"></div>

  <script src="https://cdn.jsdelivr.net/npm/d3@7.4.4/dist/d3.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/topojson@3.0.2/dist/topojson.js"></script>
`

const css_str = `
  .map {
    width: 100%;
    height: 400px;
  }
  path.boundary {
    fill: none;
    stroke: #777;
  }
`

const js_str = `
  import Map from 'ol/Map.js';
  import StadiaMaps from 'ol/source/StadiaMaps.js';
  import View from 'ol/View.js';
  import {Layer, Tile as TileLayer} from 'ol/layer.js';
  import {fromLonLat, toLonLat} from 'ol/proj.js';
  import {getCenter, getWidth} from 'ol/extent.js';

  class CanvasLayer extends Layer {
    constructor(options) {
      super(options);

      this.features = options.features;

      this.svg = d3
        .select(document.createElement('div'))
        .append('svg')
        .style('position', 'absolute');

      this.svg.append('path').datum(this.features).attr('class', 'boundary');
    }

    getSourceState() {
      return 'ready';
    }

    render(frameState) {
      const width = frameState.size[0];
      const height = frameState.size[1];
      const projection = frameState.viewState.projection;
      const d3Projection = d3.geoMercator().scale(1).translate([0, 0]);
      let d3Path = d3.geoPath().projection(d3Projection);

      const pixelBounds = d3Path.bounds(this.features);
      const pixelBoundsWidth = pixelBounds[1][0] - pixelBounds[0][0];
      const pixelBoundsHeight = pixelBounds[1][1] - pixelBounds[0][1];

      const geoBounds = d3.geoBounds(this.features);
      const geoBoundsLeftBottom = fromLonLat(geoBounds[0], projection);
      const geoBoundsRightTop = fromLonLat(geoBounds[1], projection);
      let geoBoundsWidth = geoBoundsRightTop[0] - geoBoundsLeftBottom[0];
      if (geoBoundsWidth < 0) {
        geoBoundsWidth += getWidth(projection.getExtent());
      }
      const geoBoundsHeight = geoBoundsRightTop[1] - geoBoundsLeftBottom[1];

      const widthResolution = geoBoundsWidth / pixelBoundsWidth;
      const heightResolution = geoBoundsHeight / pixelBoundsHeight;
      const r = Math.max(widthResolution, heightResolution);
      const scale = r / frameState.viewState.resolution;

      const center = toLonLat(getCenter(frameState.extent), projection);
      const angle = (-frameState.viewState.rotation * 180) / Math.PI;

      d3Projection
        .scale(scale)
        .center(center)
        .translate([width / 2, height / 2])
        .angle(angle);

      d3Path = d3Path.projection(d3Projection);
      d3Path(this.features);

      this.svg.attr('width', width);
      this.svg.attr('height', height);

      this.svg.select('path').attr('d', d3Path);

      return this.svg.node();
    }
  }

  const map = new Map({
    layers: [
      new TileLayer({
        source: new StadiaMaps({
          layer: 'stamen_watercolor',
        }),
      }),
    ],
    target: 'map',
    view: new View({
      center: fromLonLat([-97, 38]),
      zoom: 4,
    }),
  });

  /**
   * Load the topojson data and create an ol/layer/Image for that data.
   */
  d3.json('data/topojson/us.json').then(function (us) {
    const layer = new CanvasLayer({
      features: topojson.feature(us, us.objects.counties),
    });

    map.addLayer(layer);
  });
`

const package_str = `
  {
    "name": "d3",
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