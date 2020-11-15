import Vue from 'vue'
import VueRouter from 'vue-router'

import NewHardware from '../views/Hardware/NewHardware.vue'
import HardwareCommands from '../views/Hardware/HardwareCommands.vue'
import NewRocket from '../views/Rocket/NewRocket.vue'

import FirstMission from '../views/Mission/FirstMission.vue'
import ChooseHardware from '../views/Mission/ChooseHardware.vue'

import InitialPage from "../views/InitialPage.vue";
import NotFound from "../views/NotFoundPage.vue";

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
    },
    {
      path: '/firstMission',
      name: 'firstMission',
      component: FirstMission
    },
    {
      path: '/chooseHardware',
      name: 'chooseHardware',
      component: ChooseHardware
    },
    { 
      path: "*", 
      name: 'notFound',
      component: NotFound 
    },
    { 
      path: "/", 
      name: 'initialPage',
      component: InitialPage 
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
