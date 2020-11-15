import Vue from 'vue'
import VueRouter from 'vue-router'

import NewHardware from '../views/Hardware/NewHardware.vue'
import HardwareCommands from '../views/Hardware/HardwareCommands.vue'
import NewRocket from '../views/Rocket/NewRocket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/newHardware',
    name: 'newHardware',
    component: NewHardware
  },
  {
    path: '/hardwareCommands',
    name: 'hardwareCommands',
    component: HardwareCommands
  },
  {
    path: '/newRocket',
    name: 'newRocket',
    component: NewRocket
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
