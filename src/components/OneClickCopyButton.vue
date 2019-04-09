<template>
  <button
    class="one-click-copy"
    v-clipboard:copy="textToCopy"
    v-clipboard:success="onCopy"
    v-clipboard:error="onError"
    type="button"
  >
    <img v-if="!isCopied" :src="copyIcon" alt="copy">
    <span v-else>Copied to Clipboard!</span>
  </button>
</template>
<script>
import copyIcon from "../assets/copy.svg";

export default {
  data() {
    return {
      copyIcon,
      isCopied: false
    };
  },
  props: {
    textToCopy: String,
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
  name: "OneClickCopyButton"
};
</script>
<style lang='scss' src='@/styles/oneClickCopyButton.scss'></style>

