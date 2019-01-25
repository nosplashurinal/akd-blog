<template>
  <div id="app">
    <ArticleList />
    <Content />
  </div>
</template>

<script>
import ArticleList from './components/ArticleList.vue'
import Content from './components/Content.vue'

export default {
  name: 'app',
  components: {
    ArticleList,
    Content
  }
}
</script>

<style lang="sass" src="@/styles/app.scss">
</style>
