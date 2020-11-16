<template>
  <sidebar pageTitle="Missão">
  <div>
    <md-steppers :md-active-step.sync="active" md-alternative md-linear>
      <md-step id="fueling" md-label="Abastecimento" :md-editable="false" :md-done.sync="fueling">
        <fuelingData>
        </fuelingData>
        <md-button class="md-raised md-primary" @click="setDone('fueling', 'ignition')">Iniciar ignição</md-button>
      </md-step>

      <md-step id="ignition" md-label="Ignição" :md-error="ignitionStepError" :md-editable="false" :md-done.sync="ignition">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <md-button class="md-raised md-primary" @click="setDone('ignition', 'flight')">Continue</md-button>
        <md-button class="md-raised md-primary" @click="setError()">Set error!</md-button>
      </md-step>

      <md-step id="flight" md-label="Voo" :md-editable="false" :md-done.sync="flight">
        <flightData>
        </flightData>
        <md-button class="md-raised md-primary" @click="setDone('flight', 'landing')">Next</md-button>
      </md-step>

      <md-step id="landing" md-label="Pouso" :md-editable="false" :md-done.sync="landing">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <md-button class="md-raised md-primary" @click="setDone('landing')">Done</md-button>
      </md-step>
    </md-steppers>
  </div>
  </sidebar>
</template>

<script>
 import Sidebar from '../../components/Sidebar.vue'
 import FuelingData from './Fueling.vue'
 import FlightData from './Flight.vue'
  export default {
    name: 'StepperNonEditable',
    components: { Sidebar, FuelingData, FlightData },
    data: () => ({
      active: 'fueling',
      fueling: false,
      ignition: false,
      flight: false,
      landing: false,
      ignitionStepError: null
    }),
    methods: {
      setDone (id, index) {
        this[id] = true

        this.ignitionStepError = null

        if (index) {
          this.active = index
        }
      },
      setError () {
        this.ignitionStepError = 'This is an error!'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-steppers {

  }
</style>