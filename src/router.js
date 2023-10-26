import { createRouter, createWebHistory } from 'vue-router';

const route = createRouter({
  history: createWebHistory(),
  routes: [
    {path:'/',redirect:'/coaches'},
    {path:'/coaches' ,component:null},
    {path:'/coaches:id',component:null,children:[
        {path:'/conatact',component:null}
    ]},
    {path:'register',component:null},
    {path:'requests',component:null},
    {path:':notFound(.*)',component:null},
  ],
});

export default route;
