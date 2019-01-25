<template>
  <section class="akd-article">
    <div class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ante eu quam rhoncus varius. Donec tincidunt nibh viverra ligula efficitur gravida. Integer ac augue massa. Etiam auctor ex nec urna pulvinar, ut convallis ex auctor. Curabitur ultricies lorem quis lorem dapibus lobortis. Nunc libero nisl, fringilla ut nulla a, consequat euismod risus. Phasellus vel dignissim eros, a pulvinar sem. Vestibulum porttitor, massa nec venenatis ultricies, urna nulla posuere ipsum, ut volutpat enim est id quam. Sed non commodo nisl. In mi tellus, vehicula euismod augue ac, aliquet ultricies libero.</div>
    <Image :src=image alt="IKILLLYOU!" />
    <div class="paragraph">Aliquam erat volutpat. Vestibulum condimentum, nunc in pretium volutpat, nulla purus pretium diam, eu egestas elit mi sed turpis. Duis quis nunc commodo, faucibus tortor sit amet, rutrum dui. Mauris commodo feugiat metus ac consectetur. Vivamus sollicitudin, augue sed auctor porttitor, lorem est luctus nisl, ac ornare sem tortor eu ligula. Proin mauris est, iaculis vel vulputate vitae, tempor non lorem. Phasellus blandit felis et purus elementum, blandit tempus velit cursus. Aliquam imperdiet nulla sed lorem blandit hendrerit. Donec facilisis porta velit vel vulputate.</div>
    <div class="paragraph">Quisque vitae egestas nibh, sed bibendum purus. Proin nec justo eu quam sagittis egestas. Morbi sodales sed turpis eu tempus. Fusce sed dui non lectus lacinia scelerisque venenatis consequat enim. Sed quis nibh ut turpis porta fermentum. Maecenas iaculis vulputate vestibulum. Curabitur urna mauris, laoreet in vehicula vitae, ultrices id neque. Praesent ac fermentum nunc. Quisque dapibus velit sed eros tristique, ac vehicula odio faucibus. Suspendisse dolor mi, placerat eu ipsum nec, blandit dictum urna.</div>
    <div class="paragraph">Phasellus risus nunc, pulvinar nec vulputate vel, venenatis sollicitudin neque. Sed sapien velit, scelerisque eu fringilla id, ornare in leo. Ut a libero id sem lobortis pharetra sit amet ac mauris. Aenean commodo erat massa. Pellentesque eget elit blandit, dapibus enim non, sodales lorem. Sed volutpat erat id mauris commodo congue. Fusce at ultricies leo, at imperdiet tortor. Suspendisse tincidunt semper nisl, sit amet suscipit lectus vestibulum ut. Integer ut tempus justo, in dictum risus. Quisque eget pellentesque nunc. Aliquam nec luctus tortor. Phasellus sagittis eros quam, sed luctus risus condimentum eu. Nullam rhoncus aliquam ex. Donec ac urna nec ante rutrum venenatis.</div>
    <div class="paragraph">Vestibulum ut lectus laoreet, accumsan augue et, egestas eros. Mauris in ligula venenatis, aliquet dolor et, imperdiet nisi. Sed eu lectus a nisi commodo tincidunt nec ac massa. Quisque velit dolor, sollicitudin eu libero a, consequat egestas nisl. Pellentesque sodales diam vel neque rhoncus tincidunt. Aenean tempor auctor nulla quis mattis. Sed cursus, lectus in tempor fringilla, ante ante ultrices leo, ac sagittis quam nisi at ante. Etiam ut cursus nibh. Pellentesque ultrices dui eget odio tincidunt, et luctus elit rutrum. Integer leo lacus, faucibus eget varius sit amet, finibus congue purus. Fusce vel molestie lectus.</div>
  </section>
</template>
<script>
import image from '../assets/putin.jpg';
import Image from './Image';

export default {
  name: 'Article',
  data() {
    return {
      image
    }
  },
  components: {
    Image
  }
};
</script>
<style lang='scss' src='@/styles/article.scss'></style>
