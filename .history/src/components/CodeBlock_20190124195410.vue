<template>
  <div class="code-block">
    <button class="one-click-copy" type="button">
      <img :src="copyIcon" alt="copy">
    </button>
    <pre v-highlightjs><code :class="lang">{{code}}</code></pre>
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
