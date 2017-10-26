import Vue from 'vue'
import Router from 'vue-router'
import Init from '@/components/Init'
import Conversations from '@/components/Conversations'
import store from '../store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Initialize',
      component: Init
    },
    {
      path: '/conversations/:conversationId',
      name: 'Conversations',
      component: Conversations
    }
  ]
})
