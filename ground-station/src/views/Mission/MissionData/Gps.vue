<template>
  <md-card class="md-layout-item md-layout md-size-90">
    <md-card-header>
      <div class="md-title">Foguete em pouso</div>
    </md-card-header>
    <md-card-content>
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-size-60">
          <div id="chart">
            <apexchart type="line" height="120" :options="chartOptions" :series="series"></apexchart>
          </div>
        </div>
        <div class="md-layout-item md-size-30">
          <span class="md-display-1">{{ coordinates }}</span>
          <span class="md-headline">Coordenadas</span>
          <md-button class="md-raised md-primary" @click="startFueling()">Finalizar Missão</md-button>
        </div>
      </div>
    </md-card-content>
  </md-card>
</template>

<style lang="scss" scoped>
  
</style>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'HeightData',
  components: { apexchart: VueApexCharts},
  data: () => ({  
    fueling: true,
    coordinates: '-15.989383919844288, -48.045136048213',
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