<template>
  <picture class="akd-image">
    <source
      media="(max-width: 768px)"
      class="sm"
      :srcset="src"
    >
    <img
      class="lg"
      :src="src"
      :alt="alt"
    >
  </picture>
</template>
<script>
export default {
  name: "Image",
  props: {
    src: String,
    alt: {
      default: "image",
      type: String
    }
  },
  components: {}
};
</script>
<style lang='scss' src='@/styles/image.scss'></style>
