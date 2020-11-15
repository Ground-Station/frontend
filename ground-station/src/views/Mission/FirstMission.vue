<template>
  <div>
    <div class="md-layout md-alignment-center-center">
      <md-card class="md-layout-item md-size-50 md-small-size-100 ">
        <md-card-header>
          <div class="md-title">Vamos iniciar uma missão?</div>
        </md-card-header>
      
        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="cancel" class="md-accent" :disabled="sending">Agora não</md-button>
          <md-button type="submit" class="md-primary" :disabled="sending">Sim, vamos!</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.md-card{
  top: 80px;
}
body {
  max-height: 100vh;
}
</style>