<template>
  <div id="app">
    <Listing />
    <Body />
  </div>
</template>

<script>
import Listing from './components/Listing.vue'
import Body from './components/Body.vue'

export default {
  name: 'app',
  components: {
    Listing,
    Body
  }
}
</script>

<style lang="scss" src="@/styles/app.scss">
</style>
