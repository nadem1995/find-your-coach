import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './coaches/CoachesList.vue';
import CoachDetails from './coaches/CoachDetails.vue';
import CoachContact from './requests/CoachContact.vue';
import CoachRegisteration from './coaches/CoachRegisteration.vue';
import RequestReceived from './requests/RequestReceived.vue';
import NotFound from './NotFound.vue';

const route = createRouter({
  history: createWebHistory(),
  routes: [
    {path:'/',redirect:'/coaches'},
    {path:'/coaches' ,component:CoachesList,name:'coachesList'},
    {path:'/coaches/:id',component:CoachDetails, props:true, name:'coachDetails', children:[
        {path:'contact',component:CoachContact, name:'coachContact'}
    ]},
    {path:'/register',component:CoachRegisteration,name:'register'},
    {path:'/requests',component:RequestReceived,name:'requests'},
    {path:'/:notFound(.*)',component:NotFound},
  ],
});

export default route;
