<template>
  <section class="article-list">
    <div class="list-item">
      <div class="title">Title</div>
      <router-link to="/article1">
        <div class="list">Item 1</div>
      </router-link>
      <router-link to="/article2">
        <div class="list">Item 2</div>
      </router-link>
      <router-link to="/article3">
        <div class="list">Item 3</div>
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  name: "ArticleList",
  components: {}
};
</script>
<style lang='scss' src='@/styles/articleList.scss'></style>