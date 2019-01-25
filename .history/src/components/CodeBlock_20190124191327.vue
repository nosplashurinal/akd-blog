<template>
  <div class="code-block">
    <pre v-highlightjs><code :class="lang">{{code}}</code></pre>
    <button class="one-click-copy" type="button">
      <img :src="copyIcon" alt="copy">
    </button>
  </div>
</template>
<script>
import copyIcon from "../assets/copy.svg";

export default {
  name: "CodeBlock",
  data() {
    copyIcon;
  },
  props: {
    code: String,
    lang: String
  },
  components: {}
};
</script>
<style lang='scss' src='@/styles/codeBlock.scss'></style>
