import { lazy } from 'react'

const routes = [
  {
    path: '/',
    component: lazy(() => import('../pages/home')),
    shouldBeloggedIn: false,
  },
  {
    path: '/404',
    component: lazy(() => import('../pages/lost')),
    shouldBeloggedIn: false,
  },
  /*
  {
    path: '/login',
    component: lazy(() => import('../pages/login')),
    roles: [],
  },
  {
    path: '/leaderboard',
    component: lazy(() => import('../pages/leaderboard')),
    roles: [],
  },
  {
    path: '/problemset/:id',
    component: lazy(() => import('../pages/problemset/[id]')),
    roles: [],
  },
  {
    path: '/problemset',
    component: lazy(() => import('../pages/problemset')),
    roles: [],
  },
  {
    path: '/submissions',
    component: lazy(() => import('../pages/submissions')),
    roles: [],
  },
  {
    path: '/admin/problems/new',
    component: lazy(() => import('../pages/admin/newproblem')),
    roles: [],
  },
  {
    path: '/admin/problems',
    component: lazy(() => import('../pages/admin/problems')),
    roles: [],
  },
  {
    path: '/admin/clarifications',
    component: lazy(() => import('../pages/admin/clarifications')),
    roles: [],
  },
  {
    path: '/admin/announce',
    component: lazy(() => import('../pages/admin/announce')),
    roles: [],
  },
  {
    path: '/admin',
    component: lazy(() => import('../pages/admin')),
    roles: [],
  },
  */
]

export default {
  routes,
  FourOFour: lazy(() => import('../pages/lost'))
}
