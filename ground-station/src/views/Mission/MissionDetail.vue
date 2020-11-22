<template>
  <sidebar pageTitle="Missão x">
  <div>
      <flightHistory>
        </flightHistory>

  </div>
  </sidebar>
</template>

<script>
 import Sidebar from '../../components/Sidebar.vue'
//  import FuelingData from './Fueling.vue'
 import FlightHistory from './FlightHistory.vue'
//  import LandingData from './Landing.vue'
  export default {
    name: 'MissionDetail',
    components: { Sidebar, FlightHistory},
    data: () => ({
      active: 'fueling',
      fueling: false,
      ignition: false,
      flight: false,
      landing: false,
      ignitionStepError: null
    }),
  }
</script>

<style lang="scss" scoped>
</style>