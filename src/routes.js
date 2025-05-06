export default [
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('@/pages/Login.vue') },
  { path: '/dashboard', component: () => import('@/pages/Dashboard.vue') },
  { path: '/under-construction', component: () => import('@/pages/UnderConstruction.vue') },
  { path: '/structure', component: () => import('@/pages/Structure.vue') },
  { path: '/asup', component: () => import('@/pages/Asup.vue') },
]