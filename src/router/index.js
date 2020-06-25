import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Secret from '../views/Secret.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Biaticos from '../views/Biaticos.vue'
import Fabricacion from '../views/Fabricacion.vue'
import Gpersonal from '../views/Gpersonal.vue'
import Personal from '../views/Personal.vue'
import Stock from '../views/Stock.vue'

import * as firebase from "firebase";
import "firebase";

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/fabricacion',
    name: 'fabricacion',
    component: Fabricacion,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/fabricacionlist',
    name: 'fabricacion',
    component: () => import ('../components/FabricacionList')
  },
  {
    path: '/gpersonal',
    name: 'gpersonal',
    component: Gpersonal,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/personal',
    name: 'personal',
    component: Personal,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/compraslist',
    name: 'compraslist',
    component: () => import('../components/ComprasList'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/comprasedit/:id',
    name: 'comprasedit',
    component: () => import('../components/ComprasEdit'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/secret',
    name: 'secret',
    component: Secret,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/biaticoslist',
    name: 'biaticoslist',
    component: () => import('../components/BiaticosList'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/biaticosedit/:id',
    name: 'biaticosedit',
    component: () => import('../components/BiaticosEdit'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/biaticos',
    name: 'biaticos',
    component: Biaticos,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/stock',
    name: 'stock',
    component: Stock,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
})

export default router