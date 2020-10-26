import Vue from 'vue'
import Router from 'vue-router'
import LightInTime from '@/views/light'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lightInTime',
      component: LightInTime
    }
  ]
})