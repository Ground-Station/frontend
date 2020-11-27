<template>
  <md-card class="md-layout-item md-layout md-size-60 md-small-size-100" id="container">
    <md-card-content  style="display: flex; flex: 1">
      <div class="md-layout md-alignment-center-space-around"  style="flex: 1" > 
        <div class="md-layout-item md-size-80">
           <div style="width: 600px">
            <vue-table-dynamic :params="params" ref="table"></vue-table-dynamic>
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

<script>
import VueTableDynamic from 'vue-table-dynamic'
import * as axios from 'axios'
var tempos = null
var altitudes = null


export default {
  name: 'Demo',
  data() {
    return {
      params: {
        data: [
          [`Altitude`, `Tempo`]
        ],
        header: 'row',
        border: true,
        stripe: true,
        columnWidth: [{column: 0, width: 100}, {column: 2, width: 400}],
        height: 180,
        fixed: 0
      }
    }
  },
  created () {
      this.$crontab.addJob({
      name: 'counter',
      interval: {
        seconds: '/5',
      },
      job: this.random1
    },
    {
     name: 'counter',
      interval: {
        seconds: '/5',
      },
      job: this.random2
    },
    {
     name: 'counter',
      interval: {
        seconds: '/5',
      },
      job: this.mounted
    })
  },
  methods: {
  random2 = () => {
  return 
    axios
    .get('http://127.0.0.1:3000/altitudes')
    .then(response => {(this.altitudes = [response.data[response.data.length - 1].altitude]); console.log(response.data[0].altitude)})

},
  random1 = () => {
    return 
        axios
        .get('http://127.0.0.1:3000/altitudes')
        .then(response => {(this.tempos = [response.data[response.data.length - 1].tempo]); console.log(response.data[0].nome)})
    
  }

  },
  mounted () {
      this.params.data.push([this.random1, this.random2])
  },
  components: { VueTableDynamic }
}
</script>

<style lang="scss" scoped>
#container > .md-layout {
  min-height: 380px;
  height: 380px;
}
</style>

