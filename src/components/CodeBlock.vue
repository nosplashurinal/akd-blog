<template>
  <div class="code-container">
    <div class="code-block">
      <pre v-highlightjs><code :class="lang">{{code}}</code></pre>
    </div>
    <OneClickCopyButton :textToCopy="code" />
  </div>
</template>
<script>
import OneClickCopyButton from "./OneClickCopyButton.vue";

export default {
  name: "CodeBlock",
  props: {
    code: String,
    lang: String
  },
  components: {
    OneClickCopyButton
  }
};
</script>
<style lang='scss' src='@/styles/codeBlock.scss'></style>
