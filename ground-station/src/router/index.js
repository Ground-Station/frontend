import Vue from 'vue'
import VueRouter from 'vue-router'

import NewHardware from '../views/Hardware/NewHardware.vue'
import HardwareCommands from '../views/Hardware/HardwareCommands.vue'
import NewRocket from '../views/Rocket/NewRocket.vue'
import NewMission from '../views/Mission/NewMission.vue'
import Mission from '../views/Mission/Mission.vue'
import MissionDetail from '../views/Mission/MissionDetail.vue'

import InitMission from '../views/Mission/InitMission.vue'
import ChooseHardware from '../views/Mission/ChooseHardware.vue'

// import InitialPage from "../views/InitialPage.vue";
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
      path: '/initMission',
      name: 'initMission',
      component: InitMission
    },
    {
      path: '/chooseHardware',
      name: 'chooseHardware',
      component: ChooseHardware
    },
    {
      path: '/newMission',
      name: 'newMission',
      component: NewMission
    },
    {
      path: '/mission',
      name: 'mission',
      component: Mission
    },
    {
      path: '/mission/x/detail',
      name: 'missionDetail',
      component: MissionDetail
    },
    { 
      path: "*", 
      name: 'notFound',
      component: NotFound 
    },
    { 
      path: "/", 
      name: 'newRocket',
      redirect: '/newRocket' 
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
