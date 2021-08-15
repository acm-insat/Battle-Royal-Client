import { lazy } from 'react'

const routes = [
  {
    path: '/admin',
    component: lazy(() => import('../pages/admin')),
    roles: ['ADMIN'],
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
