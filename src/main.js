import { createApp } from 'vue';
import route  from './router';
const app =createApp({}) 
app.use(route);
app.mount('#app');
