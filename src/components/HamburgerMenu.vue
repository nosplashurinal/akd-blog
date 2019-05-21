<template>
  <section class="hamburger-menu">
    <button class="menu" v-on:click="onClick">
      <img class="icon" :src="menuIcon" alt="menu">
    </button>
    <transition name="maximize">
      <ArticleList v-if="isMenuActive"/>
    </transition>
    <button class="close" v-if="isMenuActive" v-on:click="onClick">
      <img class="icon" :src="closeIcon" alt="menu">
    </button>
  </section>
</template>
<script>
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import ArticleList from "@/components/ArticleList.vue";

export default {
  name: "HamburgerMenu",
  data() {
    return {
      menuIcon,
      closeIcon
    };
  },
  props: ["isMenuActive"],
  components: {
    ArticleList
  },
  methods: {
    onClick: function() {
      this.$emit("menuClicked");
    }
  }
};
</script>
<style lang='scss' src='@/styles/hamburgerMenu.scss'></style>
