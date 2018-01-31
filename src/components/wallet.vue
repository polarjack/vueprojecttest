<template>
  <div class="container">
    <h1 class="red">{{ myName }}</h1>
    <vuck></vuck>
    <h1 class="colorful">Vuck You</h1>
  </div>
</template>
<script>
import vuck from "./formTest.vue"

export default {
  components: { vuck },
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


