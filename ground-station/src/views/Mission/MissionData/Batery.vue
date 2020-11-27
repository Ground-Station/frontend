<template>
  <md-card class="md-layout-item md-layout md-size-30 md-small-size-100" id="container">
  
    <md-card-content>
      <div id="chart" style="width:350px">
        <apexchart type="radialBar" height="340" weight="340"  :options="bateryOptions" :series="baterySeries"></apexchart>
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
export default {
  name: 'BateryData',
  components: { apexchart: VueApexCharts},
  data: () => ({  
    fueling: true,
    weight: 16,
    baterySeries: [73],
    bateryOptions: {
      chart: {
        height: 240,
        weight: 240,
        type: 'radialBar',
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        radialBar: {
            hollow: {
            size: '70%',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },
          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '20px'
            },
            value: {
              color: '#111',
              fontSize: '1.7em',
              show: true,
            }
          }
        }
      },
      fill: {
        type: 'color',
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Bateria'],
    },
  }),
}
</script>