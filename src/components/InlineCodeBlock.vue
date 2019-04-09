<template>
  <div class="inline-code-container">
    <div class="inline-code-block">
      <pre v-highlightjs><code :class="lang">{{code}}</code></pre>
    </div>
    <OneClickCopyButton :textToCopy="code"/>
  </div>
</template>
<script>
import OneClickCopyButton from "./OneClickCopyButton.vue";

export default {
  name: "InlineCodeBlock",
  props: {
    code: String,
    lang: String
  },
  components: {
    OneClickCopyButton
  }
};
</script>
<style lang='scss' src='@/styles/inlineCodeBlock.scss'></style>
