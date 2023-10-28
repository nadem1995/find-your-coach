export default {
  namespaced: true,
  state() {
    return {
      coaches: [],
    };
  },

  getters: {
    coaches(state) {
      return state.coaches;
    },

    hasCoaches(state) {
      return state.coaches.length > 0;
    },
  },

  mutations: {
    setCoaches(state, payload) {
      state.coaches = payload;
    },
  },

  actions: {
    async addNewCoach(_, payload) {
     await fetch(
        `https://find-coach-3ed56-default-rtdb.firebaseio.com/coaches.json`,
        {
          method: 'POST',
          body: JSON.stringify(payload),
        }
      );
    },

    async loadCoaches(context) {
      const response = await fetch(
        'https://find-coach-3ed56-default-rtdb.firebaseio.com/coaches.json'
      );
      const responseData = await response.json();

      if (!response.ok) {
        
        const error = new Error (responseData.message || 'Failed to feach' )
        throw error;
      }
      const array = Object.values(responseData);
     context.state.coaches=array;
    },
  },
};
