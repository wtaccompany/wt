import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
//路由懒加载
const Home = () => import('@/components/Home');
const Exam = () => import('@/components/Exam');
const Notices = () => import('@/components/Notices');
const News = () => import('@/components/News');
const Guidance = () => import('@/components/Guidance');
const Test = () => import('@/components/Test');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      mode:'history',
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/exam',
      name: 'Exam',
      component: Exam,
      children: [
        {path: '/exam', component: Notices},
        {path: 'notices', component: Notices},
        {path: 'news', component: News},
        {path: 'guidance', component: Guidance},
      ]
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
  ]
})
