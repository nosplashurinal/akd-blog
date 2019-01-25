<template>
  <div class="code-container">
    <div class="code-block">
      <pre v-highlightjs><code :class="lang">{{code}}</code></pre>
    </div>
    <button
      class="one-click-copy"
      v-clipboard:copy="code"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
      type="button"
    >
      <img :src="copyIcon" alt="copy">
    </button>
  </div>
</template>
<script>
import copyIcon from "../assets/copy.svg";

export default {
  name: "CodeBlock",
  data() {
    return {
      copyIcon
    };
  },
  props: {
    code: String,
    lang: String
  },
  components: {}
};
</script>
<style lang='scss' src='@/styles/codeBlock.scss'></style>
