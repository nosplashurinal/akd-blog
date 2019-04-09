<template>
  <div class="photo">
    <picture>
      <source media="(max-width: 768px)" :srcset="src">
      <img :src="src" :style="`width:${width}`" :alt="alt">
    </picture>
    <p class="label" v-if="label">{{label}}</p>
  </div>
</template>
<script>
export default {
  name: "Image",
  props: {
    src: String,
    width: {
      default: "auto",
      type: String
    },
    alt: {
      default: "image",
      type: String
    },
    label: String
  },
  components: {}
};
</script>
<style lang='scss' src='@/styles/photo.scss'></style>
