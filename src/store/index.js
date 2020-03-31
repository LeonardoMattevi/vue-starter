import Vue from 'vue'
import Vuex from 'vuex'

import appModule from '@/store/modules/app.module'
import todoModule from '@/store/modules/todo.module'
import { version } from '../../package.json'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appModule,
    todoModule,
    version
  }
})