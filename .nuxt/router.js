import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _7bcbe268 = () => interopDefault(import('../pages/players/index.vue' /* webpackChunkName: "pages/players/index" */))
const _358bb83c = () => interopDefault(import('../pages/menu/guild.vue' /* webpackChunkName: "pages/menu/guild" */))
const _5b9b46e9 = () => interopDefault(import('../pages/menu/master.vue' /* webpackChunkName: "pages/menu/master" */))
const _5deb291a = () => interopDefault(import('../pages/players/new.vue' /* webpackChunkName: "pages/players/new" */))
const _4a355434 = () => interopDefault(import('../pages/players/_id.vue' /* webpackChunkName: "pages/players/_id" */))
const _91e32696 = () => interopDefault(import('../pages/players/_id/edit.vue' /* webpackChunkName: "pages/players/_id/edit" */))
const _f942e634 = () => interopDefault(import('../pages/players/_id/feats.vue' /* webpackChunkName: "pages/players/_id/feats" */))
const _318afbe5 = () => interopDefault(import('../pages/players/_id/memo.vue' /* webpackChunkName: "pages/players/_id/memo" */))
const _c1a9bc94 = () => interopDefault(import('../pages/players/_id/spells.vue' /* webpackChunkName: "pages/players/_id/spells" */))
const _02ed12fc = () => interopDefault(import('../pages/players/_id/weapons.vue' /* webpackChunkName: "pages/players/_id/weapons" */))
const _206b242e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/players",
      component: _7bcbe268,
      name: "players"
    }, {
      path: "/menu/guild",
      component: _358bb83c,
      name: "menu-guild"
    }, {
      path: "/menu/master",
      component: _5b9b46e9,
      name: "menu-master"
    }, {
      path: "/players/new",
      component: _5deb291a,
      name: "players-new"
    }, {
      path: "/players/:id",
      component: _4a355434,
      name: "players-id",
      children: [{
        path: "edit",
        component: _91e32696,
        name: "players-id-edit"
      }, {
        path: "feats",
        component: _f942e634,
        name: "players-id-feats"
      }, {
        path: "memo",
        component: _318afbe5,
        name: "players-id-memo"
      }, {
        path: "spells",
        component: _c1a9bc94,
        name: "players-id-spells"
      }, {
        path: "weapons",
        component: _02ed12fc,
        name: "players-id-weapons"
      }]
    }, {
      path: "/",
      component: _206b242e,
      name: "index"
    }],

    fallback: false
  })
}
