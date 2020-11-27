<template>
  <md-card class="md-layout-item md-layout md-size-60 md-small-size-100" id="container">
    <md-card-content style="display: flex; flex: 1">
      <div class="md-layout">
        <div class="md-layout-item md-size-60 md-small-size-100" style="flex: 1">
          <div id="chart" style="flex: 1">
            <apexchart type="radialBar" height="340" :options="weightOptions" :series="weightSeries"></apexchart>
          </div>
        </div>
        <div class="md-layout-item md-size-30 md-small-size-100" style="flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column">
          <span class="md-display-1" style="font-size: 70px">{{ weight }} kg</span>
          <br>
          <span class="md-headline" style="margin-top: 16px">Peso</span>

              <md-card-actions>
                <md-button class="md-raised md-primary" @click="startFueling()">Iniciar abastecimento</md-button>
              </md-card-actions>

        </div>
      </div>
    </md-card-content>



  </md-card>
</template>

<style lang="scss" scoped>
  #container > .md-layout {

  position: relative;
  min-height: 380px;
  height: 380px;
}
.card-container {
  display: flex
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
              show: true
            },
            value: {
              color: '#111',
              fontSize: '25px',
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
      labels: ['Abastecimento'],
    },
  }),
}
</script>