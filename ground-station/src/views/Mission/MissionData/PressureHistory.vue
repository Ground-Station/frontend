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
          <span class="md-display-1">{{ Pressão }} KPa</span>
          <span class="md-headline">Pressão</span>
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
    Pressão: 109908,
    series: [{
          name: "Pressão",
          data: ['109908', '103611', '092050', '081419', '062072', '049877', '034561', '035577', '037168', '055337',
                 '059877', '065343', '075944', '084740', '094344', '100135', '105684', '109664']
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
        text: 'Pressão por tempo',
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

