import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import CV from '@/views/CV';
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
      path: '/cv',
      name: 'cv',
      component: CV
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    }
  ]


})

export default router;
