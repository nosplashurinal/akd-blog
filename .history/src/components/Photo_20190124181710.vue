<template>
  <div class="photo">
    <picture>
      <source media="(max-width: 768px)" class="sm" :srcset="src">
      <img class="lg" :src="src" :alt="alt">
    </picture>
    <p class="label" v-if="label">{{label}}</p>
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
    },
    label: String
  },
  components: {}
};
</script>
<style lang='scss' src='@/styles/photo.scss'></style>
