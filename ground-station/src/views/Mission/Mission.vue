<template>
  <sidebar pageTitle="Missão">
  <div>
    <md-steppers :md-active-step.sync="active" md-alternative md-linear>
      <md-step id="fueling" md-label="Abastecimento" :md-editable="false" :md-done.sync="fueling">
        <fuelingData>
        </fuelingData>
        <md-button class="md-raised md-primary" style="margin-top:16px" @click="setDone('fueling', 'decoupling_and_depressurization')">Próximo</md-button>
      </md-step>

      <md-step id="decoupling_and_depressurization" md-label="Desacoplagem e despressurização" :md-error="decouplingAndDepressurizationStepError" :md-editable="false" :md-done.sync="decoupling_and_depressurization">
       
        <p style="font-size:25px">  Aguarde a finalização do processo de Descoplagem e despressurização!    </p>
        <img src="https://i.imgur.com/0uCbQMT.png" width="500" height="500" style="">
        <br>
        <md-button class="md-raised md-primary" @click="setDone('decoupling_and_depressurization', 'ignition')">Continuar</md-button>
      </md-step>

      <md-step id="ignition" md-label="Ignição" :md-error="ignitionStepError" :md-editable="false" :md-done.sync="ignition">
        <p style="font-size:25px">  Aguarde a finalização do processo de ignição!    </p>
        <img src="https://i.imgur.com/UtsdSYV.png" width="500" height="500" style="">
        <br>
        <md-button class="md-raised md-primary" style="" @click="setDone('ignition', 'flight')">Continuar</md-button>
      </md-step>

      <md-step id="flight" md-label="Voo" :md-editable="false" :md-done.sync="flight">
        <flightData>
        </flightData>
        <md-button class="md-raised md-primary" @click="setDone('flight', 'landing')">Próximo</md-button>
      </md-step>

      <md-step id="landing" md-label="Pouso" :md-editable="false" :md-done.sync="landing">
        <landingData>
        </landingData>
        <router-link to="/mission/x/detail" tag="md-button">Finalizar missão</router-link>
      </md-step>
    </md-steppers>
  </div>
  </sidebar>
</template>

<script>
 import Sidebar from '../../components/Sidebar.vue'
 import FuelingData from './Fueling.vue'
 import FlightData from './Flight.vue'
 import LandingData from './Landing.vue'
  export default {
    name: 'StepperNonEditable',
    components: { Sidebar, FuelingData, FlightData, LandingData},
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