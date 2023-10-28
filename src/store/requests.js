export default {
  state() {
    return {
      requests: [],
    };
  },

  getters: {
    getRequests(state) {
      return state.requests;
    },
  },

  mutations: {
    addNewRequest(state, payload) {
      state.requests.push(payload);
    },
  },

  actions: {
    addNewRequest(context,payload){
        context.commit('addNewRequest',payload)
    }
  },
};
