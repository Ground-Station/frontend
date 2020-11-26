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
          <span class="md-display-1">{{ height }} metros</span>
          <span class="md-headline">Altitude</span>
          <md-button class="md-raised md-primary" style="font-size:10px" @click="startFueling()">Iniciar abastecimento</md-button>
        </div>
      </div>
    </md-card-content>
  </md-card>
</template>

<style lang="scss" scoped>
#container > .md-layout {
  min-height: 380px;
  height: 380px;
}
</style>

<script>
import VueApexCharts from 'vue-apexcharts'


Vue.use(VueCrontab)

export default {
  name: 'HeightData',
  components: { apexchart: VueApexCharts},
  data: () => ({  
    fueling: true,
    height: 16,
    altitudes = null,
    series: [{
          name: "Altitude",
          data: [altitudes]
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
        text: 'Altitude por tempo',
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
  created () {
    let result = this.$crontab.addJob({
      name: 'height',
      interval: {
        seconds: '/6',
      },
      job: this.mounted
    })
  },
   mounted () {
    axios
      .get('http://127.0.0.1:3000/altitudes')
      .then(response => {(this.altitudes = [response.data[response.data.length - 1].altitude]); console.log(response.data[0].altitude)})
  }
}
</script>