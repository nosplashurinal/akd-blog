<template>
  <div class="photo">
    <picture>
      <source media="(max-width: 768px)" class="sm" :srcset="src">
      <img class="lg" :src="src" :alt="alt">
    </picture>
  </div>
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
<style lang='scss' src='@/styles/photo.scss'></style>
