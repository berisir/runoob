import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Special from '@/view/Special'
import Course from '@/view/Course'
import Interview from '@/view/Interview'
import Mine from '@/view/Mine'


import Resource from '@/view/Home/component/Resource'
import HomeIndex from '@/view/Home/component/HomeIndex'
import Prospect from '@/view/Home/component/Prospect'
import Textwrap from '@/view/Home/component/Textwrap'
import Trends from '@/view/Home/component/Trends'
import Detail from '@/components/Detail'
Detail
Vue.use(Router)
export default new Router({
  routes: [
  	{
      path: '/',
      redirect: '/Home/HomeIndex'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path:'HomeIndex',
          component: HomeIndex
        },
        {
          path:'Resource',
          component: Resource,
          redirect: '/Home/Resource/Prospect',
          children: [
            {
              path: 'Prospect',
              component: Textwrap
            },
            {
              path: 'Trends',
              component: Trends
            },
            {
              path: 'Vista',
              component: Prospect
            }
          ] 
        }

      ]
    },
    {
      path: '/Special',
      name: 'Special',
      component: Special
    },
    {
      path: '/Course',
      name: 'Course',
      component: Course
    },
    {
      path: '/Interview',
      name: 'Interview',
      component: Interview
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
