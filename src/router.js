import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import EmploymentHistory from '@/views/EmploymentHistory';
import Projects from '@/views/Projects';

Vue.use(Router)

const router = new Router({

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/employment-history',
      name: 'employment-history',
      component: EmploymentHistory
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    }
  ]


})

export default router;
