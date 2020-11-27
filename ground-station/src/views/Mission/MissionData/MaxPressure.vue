<template>
  <div class="md-layout-item md-size-30">
    <div class="md-layout md-gutter">
      <md-card class="md-layout-item md-layout md-size-100">
        <md-card-content>
          <span class="md-display-1">{{ pressure }} KPa</span>
          <span class="md-subheading">Pressão máxima</span>
        </md-card-content>
      </md-card>
    </div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-layout md-size-100">
        <md-button type="default" class="md-default" :disabled="sending">Baixar CSV</md-button>
        <span class="md-body-1">ou</span>
        <md-button type="primary" class="md-primary" :disabled="sending">Acessar todos os valores</md-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div > * {
    display: block;
  }
</style>

<script>
export default {
  name: 'Apogee',
  data: () => ({  
    fueling: true,
    pressure: 16,
  }),
}
</script>