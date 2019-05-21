<template>
  <div id="app" :class="{mobile: isMobile}">
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <div class="overlay" v-if="isMenuActive && isMobile" v-on:click="toggleMenu"></div>
    <ArticleList v-if="!isMobile" @itemClicked="toggleMenu"/>
    <HamburgerMenu @menuClicked="toggleMenu" :isMenuActive="isMenuActive" v-else/>
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList.vue";
import HamburgerMenu from "@/components/HamburgerMenu.vue";

export default {
  name: "app",
  components: {
    ArticleList,
    HamburgerMenu
  },
  data() {
    return {
      isMobile: this.isMobileScreen(),
      isMenuActive: false
    };
  },
  watch: {
    $route() {
      window.setTimeout(() => {
        this.toggleMenu();
      }, 450);
    }
  },
  created: function() {
    window.addEventListener("resize", this.onWindowResize);
  },
  destroyed: function() {
    window.removeEventListener("resize", this.onWindowResize);
  },
  methods: {
    onWindowResize: function() {
      if (this.isMobileScreen()) {
        if (!this.isMobile) {
          this.isMobile = true;
        }
      } else {
        if (this.isMobile) {
          this.isMobile = false;
        }
      }
    },
    isMobileScreen: function() {
      return window.innerWidth < 768;
    },
    toggleMenu: function() {
      this.isMenuActive = !this.isMenuActive;
    }
  }
};
</script>

<style lang="scss" src="@/styles/app.scss">
</style>
<style lang='scss' src='@/styles/content.scss'></style>
<style lang='scss' src='@/styles/article.scss'></style>


