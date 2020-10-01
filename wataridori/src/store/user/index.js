import * as firebase from 'firebase/app';

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    userSignIn({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setLoading', false);
          const newUser = {
            id: user.uid,
            fbKeys: {}
          };
          commit('setUser', newUser);
        })
        .catch(error => {
          commit('setLoading', false);
          commit('setError', error);
        });
    },
    autoSignin({ commit }, payload) {
      commit('setUser', { id: payload.uid, fbKeys: {} });
    },
    logout({ commit }, payload) {
      firebase.auth().signOut();
      commit('setUser', payload);
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  }
};
