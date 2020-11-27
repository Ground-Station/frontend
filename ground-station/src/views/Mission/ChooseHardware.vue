<template>
  <div>
    <div class="md-layout md-alignment-center-center">
      <md-card id="page-card" class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Escolha um foguete para a missão</div>
        </md-card-header>
      
        <md-card-content>
          <div class="md-layout md-alignment-center-space-around">
            <md-card class="md-layout-item md-size-40 md-small-size-100" md-with-hover v-for="foguete in foguetes" :key="foguete.nome">
              <md-ripple>
                <md-card-header>
                  <div class="md-title">
                    {{ foguete }}
                  </div>
                  <div class="md-subhead"></div>
                </md-card-header>

                <md-card-content>
            
                </md-card-content>

                <md-card-actions>
                  <router-link to="/newMission" tag="md-button">Escolher</router-link>
                </md-card-actions>
              </md-ripple>
            </md-card>
          </div> 
        </md-card-content>
        <md-progress-bar md-mode="indeterminate" v-if="sending" />
      </md-card>
    </div>
  </div>
</template>

<script>
import * as axios from 'axios'

export default {
 data () {
    return {
      foguetes: null
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:3000/foguetes')
      .then(response => {(this.foguetes = [response.data[response.data.length - 1].nome]); console.log(response.data[0].nome)})
  }
}
</script>

<style lang="scss" scoped>
#page-card{
  top: 80px;
}
body {
  max-height: 100vh;
}
</style>