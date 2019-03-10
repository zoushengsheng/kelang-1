import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import home from '../views/home';
import carousel from '../views/home/carousel';
import profile from '../views/home/profile';
import vote from '../views/vote';


const routes = [{
    path: '/',
    redirect: '/home/',
}, { 
    path: '/home',
    component: home,
    children: [{
        path: '/',
        component: carousel,
    }, {
        path: 'profile',
        component: profile
    }] 
}, { 
    path: '/vote',
    component: vote 
}];
const router = new VueRouter({
  routes,
});

export default router;
