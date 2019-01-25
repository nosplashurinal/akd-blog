<template>
  <picture>
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
    alt: String
  },
  components: {}
};
</script>
<style lang='scss' src='@/styles/image.scss'></style>
