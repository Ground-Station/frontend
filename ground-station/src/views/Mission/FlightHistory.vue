<template>
  <div>
    <div class="md-layout md-alignment-top-space-around nowrap" id="container">
      <apogee>
      </apogee>
      <heightHistory>
      </heightHistory>
    </div>
    <div class="md-layout md-alignment-top-space-around nowrap" id="container">
      <velocityHistory>
      </velocityHistory>
      <maxVelocity>
      </maxVelocity>
    </div>
    <div class="md-layout md-alignment-top-space-around nowrap" id="container">
      <maxPressure>
      </maxPressure>
      <pressureHistory>
      </pressureHistory>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #container > .md-layout {
  background-color: white;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  height: 380px;
  margin-bottom: 30px;
}
</style>

<script>
import HeightHistory from './MissionData/HeightHistory.vue'
import Apogee from './MissionData/Apogee.vue'
import VelocityHistory from './MissionData/VelocityHistory.vue'
import MaxVelocity from './MissionData/MaxVelocity.vue'
import PressureHistory from './MissionData/PressureHistory.vue'
import MaxPressure from './MissionData/MaxPressure.vue'

export default {
  name: 'FlightHistory',
  components: {HeightHistory, Apogee, VelocityHistory, MaxVelocity, PressureHistory, MaxPressure},
}
</script>