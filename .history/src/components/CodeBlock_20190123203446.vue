<template>
  <div class="code-block">
    <pre v-highlightjs><code class="css">{{code}}</code></pre>
  </div>
</template>
<script>
import code from "../code/test_code.js";

export default {
  name: "CodeBlock",
  data() {
    return { code };
  },
  components: {}
};
</script>
<style lang='scss' src='@/styles/codeBlock.scss'></style>
