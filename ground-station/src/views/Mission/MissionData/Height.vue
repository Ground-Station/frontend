<template>
  <md-card class="md-layout-item md-layout md-size-60 md-small-size-100" id="container">
    <md-card-content  style="display: flex; flex: 1">
      <div class="md-layout md-alignment-center-space-around"  style="flex: 1" > 
        <div class="md-layout-item md-size-80">
          <div class="small">
            <line-chart :chart-data="datacollection" id="mychart"></line-chart>
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

import * as axios from 'axios'
import LineChart from "../LineChart.js";
import * as io from "socket.io-client";

var socket = io.connect("http://localhost:8080/altitudes");


export default {
 components: {
    LineChart
  },
  data() {
    return {
      datacollection: null
    };
  },
  created() {
    this.getRealtimeData()
  },
  methods: {
    fillData(fetchedData) {
      this.datacollection = {
        labels: [this.getRandomChartValues(fetchedData), this.getRandomChartValues(fetchedData)],
        datasets: [
          {
            label: "Google Stock",
            backgroundColor: "#1A73E8",
            data: [this.getRandomChartValues(fetchedData), this.getRandomChartValues(fetchedData)]
          },
          {
            label: "Microsoft Stock",
            backgroundColor: "#2b7518",
            data: [this.getRandomChartValues(fetchedData), this.getRandomChartValues(fetchedData)]          }
        ]
      };
    },
    getRealtimeData() {
      socket.on("newdata", fetchedData => {
        this.fillData(fetchedData) 
      })
    },
    getRandomChartValues(number){
      return Math.floor(Math.random() * number)
    }
  }
};
  // name: 'HeightData',
  // components: { apexchart: VueApexCharts},
  // data: () => ({  
  //   fueling: true,
  //   height: 16,
  //   altitudes:  null,
  //   series: [{
  //         name: "Altitude",
  //         data: [this.altitudes]
  //   }],
  //   chartOptions: {
  //     chart: {
  //       width: '100%',
  //       height: 240,
  //       type: 'line',
  //       zoom: {
  //         enabled: false
  //       }
  //     },
  //     dataLabels: {
  //       enabled: false
  //     },
  //     stroke: {
  //       curve: 'smooth'
  //     },
  //     title: {
  //       text: 'Altitude por tempo',
  //       align: 'left'
  //     },
  //     grid: {
  //       row: {
  //         colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
  //         opacity: 0.5
  //       },
  //     },
  //     xaxis: {
  //       // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  //       categories: ['10:30', '10:31', '10:32', '10:33', '10:34', '10:35', '10:36', '10:37', '10:38',
  //                    '10:39', '10:40', '10:41', '10:42', '10:43', '10:44', '10:45', '10:46', '10:47'
  //       ],
  //     }
  //   },
  // }),
  // created () {
  //   let result = this.$crontab.addJob({
  //     name: 'height',
  //     interval: {
  //       seconds: '/6',
  //     },
  //     job: this.mounted
  //   })
  // },
  //  mounted () {
  //   axios
  //     .get('http://127.0.0.1:3000/altitudes')
  //     .then(response => {(this.altitudes = [response.data[response.data.length - 1].altitude]); console.log(response.data[0].altitude)})
  // }
//}
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>