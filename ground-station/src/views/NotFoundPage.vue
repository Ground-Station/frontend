<template>
  <div>
    <div class="md-layout md-alignment-top-center">
      <div class="md-layout-item md-size-100 md-small-size-100">
        <span class="md-display-3">Houston, temos um problema</span>
        <img src="@/assets/not-found.svg" alt="" style="width: auto; height: 60vh;
            display: block; margin-left: auto; margin-right: auto;">
        <span class="md-headline">Página não escontrada</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  div > * {
    margin: .5em 0;
    display: block;
  }
  body {
    max-height: 100vh;
  }
</style>