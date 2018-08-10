import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import SwitchConfigurator from '@/components/SwitchConfigurator/index'
import Switches from '@/components/SwitchConfigurator/Switches'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sc',
      component: SwitchConfigurator,
      children: [{
        path: '/switches',
        component: Switches
      }]
    }
  ]
})
