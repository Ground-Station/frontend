<template>
  <div>
    <div class="md-layout md-alignment-center-center">
      <md-card id="page-card" class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Escolha um foguete para a missão</div>
        </md-card-header>
      
        <md-card-content>
          <div class="md-layout md-alignment-center-space-around">
            <md-card class="md-layout-item md-size-40 md-small-size-100" md-with-hover v-for="item in items" :key="item.message">
              <md-ripple>
                <md-card-header>
                  <div class="md-title">
                    {{ item.message }}
                  </div>
                  <div class="md-subhead">It also have a ripple</div>
                </md-card-header>

                <md-card-content>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
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
export default {
  data: () => ({
    items: [
      { message: 'Algo' },
      { message: 'Outro' }
    ]
  })
};
</script>

<style lang="scss" scoped>
#page-card{
  top: 80px;
}
body {
  max-height: 100vh;
}
</style>