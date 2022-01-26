import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _17982ea6 = () => interopDefault(import('../pages/album.vue' /* webpackChunkName: "pages/album" */))
const _91c903d0 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _43735ed5 = () => interopDefault(import('../pages/landing.vue' /* webpackChunkName: "pages/landing" */))
const _7edb4ca7 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _7cb90034 = () => interopDefault(import('../pages/play.vue' /* webpackChunkName: "pages/play" */))
const _5dc39411 = () => interopDefault(import('../pages/posts.vue' /* webpackChunkName: "pages/posts" */))
const _65d107dc = () => interopDefault(import('../pages/startgame.vue' /* webpackChunkName: "pages/startgame" */))
const _6ecede8c = () => interopDefault(import('../pages/table.vue' /* webpackChunkName: "pages/table" */))
const _046c83f8 = () => interopDefault(import('../pages/todo.vue' /* webpackChunkName: "pages/todo" */))
const _9598ace0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/album",
    component: _17982ea6,
    name: "album"
  }, {
    path: "/inspire",
    component: _91c903d0,
    name: "inspire"
  }, {
    path: "/landing",
    component: _43735ed5,
    name: "landing"
  }, {
    path: "/login",
    component: _7edb4ca7,
    name: "login"
  }, {
    path: "/play",
    component: _7cb90034,
    name: "play"
  }, {
    path: "/posts",
    component: _5dc39411,
    name: "posts"
  }, {
    path: "/startgame",
    component: _65d107dc,
    name: "startgame"
  }, {
    path: "/table",
    component: _6ecede8c,
    name: "table"
  }, {
    path: "/todo",
    component: _046c83f8,
    name: "todo"
  }, {
    path: "/",
    component: _9598ace0,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
