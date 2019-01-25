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
      <img v-if="!isCopied" :src="copyIcon" alt="copy">
      <span v-else>Copied to Clipboard!</span>
    </button>
  </div>
</template>
<script>
import copyIcon from "../assets/copy.svg";

export default {
  name: "CodeBlock",
  data() {
    return {
      copyIcon,
      isCopied: false
    };
  },
  props: {
    code: String,
    lang: String
  },
  methods: {
    onCopy: function() {
      window.setTimeout(() => {
        this.isCopied = false;
      }, 4000);
      this.isCopied = true;
    },
    onError: function() {
      alert("Failed to copy texts");
    }
  },
  components: {}
};
</script>
<style lang='scss' src='@/styles/codeBlock.scss'></style>
