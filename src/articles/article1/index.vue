<template>
  <div class="content">
    <Article />
    <CodeBlock :code=code lang="javascript" />
  </div>
</template>
<script>
import Article from './Article.vue';
import CodeBlock from '@/components/CodeBlock.vue';
import code from "./code.js";

export default {
  name: "Article1",
  data() {
    return {
      code
    }
  },
  components: {
    Article,
    CodeBlock
  }
};
</script>
