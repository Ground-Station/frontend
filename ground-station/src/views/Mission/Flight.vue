<template>
  <div>
    <div class="md-layout md-alignment-center-space-around">
      <bateryData>
      </bateryData>
      
      <md-card id="page-card" class="md-layout-item md-size-60 md-small-size-100">
        <md-card-header>
          <div class="md-title">Abastecimento do foguete</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-60 md-small-size-100">
              <div id="chart">
                <apexchart type="line" height="240" :options="chartOptions" :series="series"></apexchart>
              </div>
            </div>
            <!-- <div class="md-layout-item md-size-30 md-small-size-100">
              <span class="md-display-1">{{ weight }} Kg</span>
              <span class="md-headline">Peso</span>
              <md-button class="md-raised md-primary" @click="startFueling()">Iniciar abastecimento</md-button>
            </div> -->
          </div>
        </md-card-content>
      </md-card>

    </div>
  </div>
</template>

<style lang="scss" scoped>
  
</style>

<script>
// import ApexCharts from 'apexcharts'
import VueApexCharts from 'vue-apexcharts'
import BateryData from './MissionData/Batery.vue'
export default {
  name: 'FlightData',
  components: { apexchart: VueApexCharts, BateryData},
  data: () => ({  
    fueling: true,
    weight: 16,
    series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    chartOptions: {
      chart: {
        height: 240,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    },
  }),
}
</script>