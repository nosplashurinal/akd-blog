import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Styling for code
import VueHighlightJS from 'vue-highlightjs'
import './styles/monokaiSublime.scss'

// One-click Copy to Clipboard
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(VueHighlightJS)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
