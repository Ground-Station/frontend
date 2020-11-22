<template>
  <div>
    <div class="md-layout md-alignment-center-space-around">
      <apogee>
      </apogee>
      <heightHistory>
      </heightHistory>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
</style>

<script>
import HeightHistory from './MissionData/HeightHistory.vue'
import Apogee from './MissionData/Apogee.vue'
export default {
  name: 'FlightHistory',
  components: {HeightHistory, Apogee},
}
</script>