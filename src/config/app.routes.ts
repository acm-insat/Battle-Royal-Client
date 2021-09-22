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
    path: '/admin',
    component: lazy(() => import('../pages/admin')),
    roles: [],
  },
  {
    path: '/',
    component: lazy(() => import('../pages/home')),
    roles: [],
  },
]

export default routes
