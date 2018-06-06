
export default [
  {
    path: '/',
    component: () => import('pages/demo'),
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
