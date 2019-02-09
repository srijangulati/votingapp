import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    polls:[{
      name: 'Election 1',
      options: [{
        name: 'candidate 1',
        votes: 100,
      },{
        name: 'candidate 2',
        votes: 200
      }]
    }]
  },
  mutations: {
    ADD_POLL(state, payload){
      state.polls.push(payload);
    },
    DELETE_POLL(state, payload){
      state.polls.splice(payload.index, 1);
    },
    UPDATE_POLL(state,payload){
      state.polls[payload.index] = payload.updatedPoll;
    }
  },
  actions: {
    addPoll({commit}, payload){
      commit('ADD_POLL',payload);
    },
    deletePoll({commit}, payload){
      commit('DELETE_POLL',payload);
    },
    updatePoll({commit},payload){
      commit('UPDATE_POLL',payload);
    }
  },
  plugins: [new VuexPersistence().plugin]
})
