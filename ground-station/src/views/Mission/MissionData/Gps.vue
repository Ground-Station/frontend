<template  >
  <md-card class="md-layout-item md-layout md-size-90" style="height:100px">
    <md-card-content  style="height:100px">
          <span class="md-headline">Coordenadas:</span>
          <span class="md-display-1" style="float:right; margin-left:25px">{{ coordinates }}</span>
    </md-card-content>
  </md-card>
</template>

<style lang="scss" scoped>
  
</style>

<script>
export default {
  name: 'HeightData',
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