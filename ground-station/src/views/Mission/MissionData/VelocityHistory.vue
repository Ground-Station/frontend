<template>
  <md-card class="md-layout-item md-layout md-size-60 md-small-size-100" id="container">
    <md-card-content  style="display: flex; flex: 1">
      <div class="md-layout md-alignment-center-space-around"  style="flex: 1" > 
        <div class="md-layout-item md-size-80">
           <div id="chart">
            <apexchart type="line" height="240" :options="chartOptions" :series="series"></apexchart>
          </div>
        </div>
        <div class="md-layout-item md-size-10"   style="flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column" >
          <span class="md-display-1">{{ height }} m/s</span>
          <span class="md-headline">Velocidade</span>
        </div>
      </div>
    </md-card-content>
  </md-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'VelocityData',
  components: { apexchart: VueApexCharts},
  data: () => ({  
    fueling: true,
    height: 16,
    series: [{
          name: "Velocidade",
          data: [2, 7, 15, 17, 19, 22, 17, 13, 8,
                 4, 1, 0, 2, 5, 7, 7, 8, 8]
    }],
    chartOptions: {
      chart: {
        width: '100%',
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
        curve: 'smooth'
      },
      title: {
        text: 'Velocidade por tempo',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        categories: ['10:30', '10:31', '10:32', '10:33', '10:34', '10:35', '10:36', '10:37', '10:38',
                     '10:39', '10:40', '10:41', '10:42', '10:43', '10:44', '10:45', '10:46', '10:47'
        ],
      }
    },
  }),
}
</script>

<style lang="scss" scoped>
#container > .md-layout {
  min-height: 380px;
  height: 380px;
}
</style>

