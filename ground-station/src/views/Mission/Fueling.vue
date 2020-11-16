<template>
  <div>
    <div class="md-layout md-alignment-center-space-around">
      <bateryData>
      </bateryData>
      <weightData>
      </weightData>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
// import ApexCharts from 'apexcharts'
// import VueApexCharts from 'vue-apexcharts'
import BateryData from './MissionData/Batery.vue'
import WeightData from './MissionData/Weight.vue'
export default {
  name: 'FuelingData',
  components: { BateryData, WeightData},
}
</script>