<template>
  <div class="content">
    <Article />
    <CodeBlock />
  </div>
</template>
<script>
import Article from './Article.vue';
import CodeBlock from './CodeBlock.vue';
import code from "../code/test_code.js";

export default {
  name: "Content",
  components: {
    Article,
    CodeBlock
  }
};
</script>
<style lang='scss' src='../styles/content.scss'></style>

