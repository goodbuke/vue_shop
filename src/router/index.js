import VueRouter from 'vue-router';
import Vue from 'vue';
import routes from './routes.js';

import store from '@/store';


Vue.use(VueRouter);

let router = new VueRouter({
  routes,
  //滚动行为
  scrollBehavior(){
    return {y:0}
  }
})
router.beforeEach((to,from,next)=>{
  const token = store.state.user.token;
  if(token){
    // token存在，登录过了，不能再去login
    if(to.path == '/login'){
      // 想跳转到login,返回到首页
      next('/home');
    }else{
      next();
    }
  }else{
    if(to.path == '/login'){
      next();
    }else{
      next(false);
    }

  }
  // next();


})

export default router;
