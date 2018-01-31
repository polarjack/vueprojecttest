<template>
  <div class="container">
    <h1 class="red">{{ myName }}</h1>
    <Vuck></Vuck>
    <h1 class="colorful">Vuck You</h1>
  </div>
</template>
<script>
import Vuck from "./formTest.vue"

export default {
  data() {
    return {
      myName: "yoooo"
    }
  }
}
</script>
<style>
.red {
  color: red;
}
.colorful {
  color:antiquewhite;
}
</style>


