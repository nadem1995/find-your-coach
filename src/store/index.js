import { createStore } from "vuex";
import coachModule from './coaches.js';
import requestesModule from './requests.js';

const store = createStore ({
    modules:{
        coaches :coachModule,
        requstes : requestesModule,
    }
});

export default store;