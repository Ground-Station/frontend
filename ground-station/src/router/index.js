import Vue from 'vue'
import VueRouter from 'vue-router'

import NewHardware from '../views/Hardware/NewHardware.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/newHardware',
    name: 'newHardware',
    component: NewHardware
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
