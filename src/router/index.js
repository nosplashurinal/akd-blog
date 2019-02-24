import Vue from 'vue'
import Router from 'vue-router'
import Article1 from '@/articles/article1'
import ErrorPage from '@/components/ErrorPage'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/article1',
      name: 'Article1',
      component: Article1
    },
    {
      path: '*',
      name: '404Page',
      component: ErrorPage
    }
  ]
});