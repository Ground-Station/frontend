<template>
  <md-card class="md-layout-item md-layout md-size-60 md-small-size-100">
    <md-card-header>
      <div class="md-title">Abastecimento do foguete</div>
    </md-card-header>
    <md-card-content>
      <div class="md-layout md-gutter md-alignment-center-space-around">
        <div class="md-layout-item md-size-70 md-small-size-100">
          <div id="chart">
            <apexchart type="line" height="240" :options="chartOptions" :series="series"></apexchart>
          </div>
        </div>
        <div class="md-layout-item md-size-20 md-small-size-100">
          <span class="md-display-1">{{ height }} metros</span>
          <span class="md-headline">Altitude</span>
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
  name: 'HeightHistory',
  components: { apexchart: VueApexCharts},
  data: () => ({  
    fueling: true,
    height: 16,
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