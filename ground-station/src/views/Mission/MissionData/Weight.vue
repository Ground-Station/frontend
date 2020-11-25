<template>
  <md-card class="md-layout-item md-layout md-size-60 md-small-size-100" id="container">
    <md-card-header>
      <div class="md-title">Abastecimento do foguete</div>
    </md-card-header>
    <md-card-content>
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-size-60 md-small-size-100">
          <div id="chart" >
            <apexchart type="radialBar" height="240" :options="weightOptions" :series="weightSeries"></apexchart>
          </div>
        </div>
        <div class="md-layout-item md-size-30 md-small-size-100">
          <span class="md-display-1">{{ weight }} kg</span>
          <span class="md-headline">Peso</span>
          
        </div>
      </div>
    </md-card-content>
    <md-card-actions>
<md-button class="md-raised md-primary" @click="startFueling()">Iniciar abastecimento</md-button>
    </md-card-actions>
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
  name: 'WeightData',
  components: { apexchart: VueApexCharts},
  data: () => ({  
    fueling: true,
    weight: 27,
    weightSeries: [100],
    weightOptions: {
      chart: {
        height: 240,
        type: 'radialBar',
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
            hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
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
              show: false
            },
            value: {
              color: '#111',
              fontSize: '36px',
              show: true,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#ABE5A1'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Bateria'],
    },
  }),
}
</script>