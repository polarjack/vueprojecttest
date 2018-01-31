<template>
  <div class="container">
    <h1 class="red">{{ myName }}</h1>
    <formTest></formTest>
  </div>
</template>
<script>
import formTest from "./formTest.vue"

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
</style>


