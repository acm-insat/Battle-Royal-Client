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
    path: '/',
    component: lazy(() => import('../pages/home')),
    roles: [],
  },
]

export default routes
