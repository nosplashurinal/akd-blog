<template>
  <div class="code-block">
    <pre v-highlightjs="code"><code class="javascript"></code></pre>
  </div>
</template>
<script>
import code from "../code/test_code.js";

export default {
  name: "CodeBlock",
  data() {
    code
  },
  components: {}
};
</script>
<style lang='scss' src='@/styles/codeBlock.scss'></style>
