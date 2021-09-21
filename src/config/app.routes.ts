import { lazy } from 'react'

const routes = [
  {
    path: '/register',
    component: lazy(() => import('../pages/register')),
    roles: [],
  },
  {
    path: '/lost',
    component: lazy(() => import('../pages/lost')),
    roles: [],
  },
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
    path: '/',
    component: lazy(() => import('../pages/home')),
    roles: [],
  },
]

export default routes
