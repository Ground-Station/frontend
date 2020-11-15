<template>
  <div id="background-color">
    <div id="background-image">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped> 
#background-color {
  width: 100vw;
  height: 100vh;
  background-color: #0F0E3E;
}

#background-image {
  /* width: 100%; */
  height: 60%;
  background-image: url("../assets/background.svg");
  position: relative;
  animation-name: move;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}


@keyframes move {
  0%   {left:0px; top:0px;}
  25%  {left:10px; top:0px;}
  50%  {left:10px; top:10px;}
  75%  {left:0px; top:10px;}
  100% {left:0px; top:0px;}
}
</style>