<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
html {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
</style>
