import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'

const routes =[
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
  ];

  const router = createRouter ({
    



