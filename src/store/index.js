import Vue from 'vue'
import Vuex from 'vuex'

import 'babel-polyfill'

import firebase from 'firebase'
import 'firebase/firestore'
import config from '../config'

import users from './modules/users'
import conversations from './modules/conversations'

firebase.initializeApp(config)

Vue.use(Vuex)
const actions = {
  seed () {
    console.log('seed: ', seed);
  }
}

const state = {
  db: firebase.firestore()
}

export default new Vuex.Store({
  state,
  actions,
  modules: {
    users: users,
    conversations: conversations
  }
})
