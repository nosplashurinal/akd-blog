<template>
  <div class="code-block">
    <pre v-highlightjs><code :class="lang">{{code}}</code></pre>
    <button
  </div>
</template>
<script>
export default {
  name: "CodeBlock",
  props: {
    code: String,
    lang: String
  },
  components: {}
};
</script>
<style lang='scss' src='@/styles/codeBlock.scss'></style>
