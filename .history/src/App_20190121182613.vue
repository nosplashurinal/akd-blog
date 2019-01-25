<template>
  <div id="app">
    <ArticleList />
    <Body />
  </div>
</template>

<script>
import ArticleList from './components/ArticleList.vue'
import Body from './components/Body.vue'

export default {
  name: 'app',
  components: {
    ArticleList,
    Body
  }
}
</script>

<style lang="scss" src="@/styles/app.scss">
</style>
