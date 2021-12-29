import {createRouter, createWebHashHistory} from 'vue-router'
const routes = [{
  path: '/:path(.*)+',
  component: ()=>import("./views/Layout.vue"),
  meta: {
    title: '首页'
  },
  children: [
    {
      path: '/',
      component: ()=>import("./views/cart"),
      meta: {
        title: '购物车'
      }
    },
    {
      name: 'user',
      path: '/user',
      component: ()=>import("./views/user"),
      meta: {
        title: '会员中心'
      }
    },
    {
      name: 'goods',
      path: '/goods',
      component: ()=>import("./views/goods"),
      meta: {
        title: '商品'
      }
    }
  ]
} 
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if(title){
    document.title = title
  }
  next()
})

export { router }