import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Special from '@/view/Special'
import Course from '@/view/Course'
import Interview from '@/view/Interview'
<<<<<<< HEAD
import My from '@/view/My'
import MyQuestion from '@/view/MyQuestion'
import MyCollect from '@/view/MyCollect'
import MyDiscuss from '@/view/MyDiscuss'
import MyToolCase from '@/view/MyToolCase'
import Resume from '@/view/MyToolCase/children/Resume'
import LeavingCertificate from '@/view/MyToolCase/children/LeavingCertificate'
import Compensation from '@/view/MyToolCase/children/Compensation'
import Watercourse from '@/view/MyToolCase/children/Watercourse'

=======
import Mine from '@/view/Mine'
import Register from '@/view/Mine/component/Register'
import Logined from '@/view/Mine/component/Logined'
>>>>>>> 882eb0e43eecb0252f72e224780051a842430015

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
<<<<<<< HEAD
=======
      path: '/Mine',
      name: 'Mine',
      component: Mine,
      redirect:'/Mine/register',
      children:[
        {
          path: 'register',
          name: 'register',
          component: Register
        },
        {
          path: 'logined',
          name: 'logined',
          component: Logined
        }
      ]
    },
    {
>>>>>>> 882eb0e43eecb0252f72e224780051a842430015
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: "/MyQuestion",
      name: "MyQuestion",
      component: MyQuestion
    },
    {
      path: "/MyCollect",
      name: "MyCollect",
      component: MyCollect
    },
    {
      path: "/MyDiscuss",
      name: "MyDiscuss",
      component: MyDiscuss
    },
    {
      path: "/MyToolCase",
      redirect:"/MyToolCase/Resume",
      name: "MyToolCase",
      component: MyToolCase,
      children:[
        {
          path: 'Resume',
          component: Resume
        },
        {
          path: 'LeavingCertificate',
          component: LeavingCertificate
        },
        {
          path: 'Compensation',
          component: Compensation
        },
        {
          path: 'Watercourse',
          component: Watercourse
        }
      ]
    }
  ]
})
