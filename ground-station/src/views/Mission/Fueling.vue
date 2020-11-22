<template>
  <div>
    <div class="md-layout md-alignment-center-space-around" id="container">
      <bateryData>
      </bateryData>
      <weightData>
      </weightData>
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
}
</style>

<script>
import BateryData from './MissionData/Batery.vue'
import WeightData from './MissionData/Weight.vue'
export default {
  name: 'FuelingData',
  components: { BateryData, WeightData},
}
</script>