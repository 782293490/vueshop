import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      component:()=>import("@/views/Login"),
      meta:{title:"xx管理系统"}
    },
    {
      path:'/',
      component:()=>import("@/views/Layout"),
      meta:{title:"xx管理系统"},
      redirect:"/index",   //重定向
      children:[
        {
          path:'/index',
          component:()=>import("@/views/Index"),
          meta:{title:"后台首页"}
        },
        {
          path:'/menu',
          component:()=>import("@/views/system/Menu"),
          meta:{ title:"菜单管理"}
        },
        {
          path:'/role',
          component:()=>import("@/views/system/Role"),
          meta:{ title:"菜单管理"}
        },
        {
          path:'/user',
          component:()=>import("@/views/system/User"),
          meta:{ title:"菜单管理"}
        },
      ]
    },
    
  ]
})

router.beforeEach((to,from,next)=>{
  document.title = to.meta.title,
  next();
})

export default router;