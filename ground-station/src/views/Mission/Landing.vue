<template>
  <div>
    <div class="md-layout md-alignment-top-space-around nowrap" id="container">
      <bateryData>
      </bateryData>
      <heightData>
      </heightData>
    </div>
    <div class="md-layout md-alignment-top-space-around nowrap" id="container">
      <gpsData>
      </gpsData>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #container > .md-layout {
  background-color: white;
  align-items: center;
  justify-content: center;
  min-height: 380px;
  height: 380px;
  margin-bottom: 30px;
}
</style>

<script>
import BateryData from './MissionData/Batery.vue'
import HeightData from './MissionData/Height.vue'
import GpsData from './MissionData/Gps.vue'
export default {
  name: 'LandingData',
  components: {BateryData, HeightData, GpsData},
}
</script>