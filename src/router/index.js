import Vue from 'vue'
import VueRouter from 'vue-router'

// import store from '../store/index'

import homeView from '../views/Home.view.vue';
import aboutView from '../views/About.view.vue';
import todoView from '../views/Todo.view.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeView
  },
  {
    path: '/about',
    name: 'about',
    component: aboutView
  },
  {
    path: '/todo',
    name: 'todo',
    component: todoView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(async (to, from, next) => {
  let redirectRoute = "";

  // if(store.state.appModule.authInfo) {
  //   // check route guard
  // }
  // redirect logic

  if(redirectRoute)
    next(redirectRoute);
  else
    next();
})
export default router
