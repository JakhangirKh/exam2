export default [
  {
    path: '/',
    meta: {
      layout: 'main',
      auth: true,
    },
    
    component: () => import('@/pages/PMain.vue'),
  },
]
