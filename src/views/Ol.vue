<template>
  <div id="map" class="map"></div>
</template>

<script setup>
import { onMounted } from "vue";
import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";

onMounted(() => {
  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: "map",
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });
});
</script>

<style scoped>
.map {
  width: 100%;
  height: 400px;
}
</style>
