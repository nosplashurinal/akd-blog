<template>
  <div class="code-block">
    <pre v-highlightjs><code class="javascript">{{code}}</code></pre>
  </div>
</template>
<script>
export default {
  name: "CodeBlock",
  components: {}
};
</script>
<style lang='scss' src='@/styles/codeBlock.scss'></style>
