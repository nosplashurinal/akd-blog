<template>
  <div id="app">
    <ArticleList/>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList.vue";

export default {
  name: "app",
  components: {
    ArticleList
  }
};
</script>

<style lang="scss" src="@/styles/app.scss">
</style>
<style lang='scss' src='@/styles/content.scss'></style>
<style lang='scss' src='@/styles/article.scss'></style>


