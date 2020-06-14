import Vue from 'vue'
import VueRouter from 'vue-router'

// import store from '../store/index'

import Layout from '../components/layout/Layout.vue'
import homeView from '../views/Home.view.vue';
import aboutView from '../views/About.view.vue';
import todoView from '../views/Todo.view.vue';
import ErrorView from '../views/Error.view.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    components: {
      main: Layout 
    },
    children: [{
        path: '/',
        components: {
          page: homeView 
        }
      },

    ]
  },
  {
    path: '/about',
    name: 'About',
    components: {
      main: Layout 
    },
    children: [{
        path: '/',
        components: {
          page: aboutView 
        }
      },

    ]
  },

  {
    path: '/todo',
    name: 'Todo',
    components: {
      main: Layout 
    },
    children: [{
        path: '/',
        components: {
          page: todoView 
        }
      },

    ]
  },
  {
    path: '/error',
    name: 'Error',
    components: {
      main: ErrorView 
    },

  },
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
