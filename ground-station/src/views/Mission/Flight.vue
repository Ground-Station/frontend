<template>
  <div>
    <div class="md-layout md-alignment-center-space-around">
      <bateryData>
      </bateryData>
      <heightData>
      </heightData>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
</style>

<script>
import BateryData from './MissionData/Batery.vue'
import HeightData from './MissionData/Height.vue'
export default {
  name: 'FlightData',
  components: {BateryData, HeightData},
}
</script>