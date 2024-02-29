<!-- HTML -->
<template>
  <!-- Single View -->
  <div v-if="selectProduct">
    <h1>SINGLE VIEW</h1>
  </div>
</template>

<!-- JAVASCRIPT -->
<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>

<!-- CSS -->
<style scoped>
@media only screen and (max-width: 600px) {
}
</style>
