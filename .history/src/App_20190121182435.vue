<template>
  <div id="app">
    <Listing />
    <Body />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" src="@/styles/app.scss">
</style>
