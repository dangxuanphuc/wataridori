import fb from '@/firebase.js';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000,
  didOpen: toast => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

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
      fb.auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setLoading', false);
          const newUser = {
            id: user.uid
          };
          commit('setUser', newUser);
          Toast.fire({
            icon: 'success',
            title: 'Welcome Back to Wataridori Blog!'
          });
        })
        .catch(error => {
          commit('setLoading', false);
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Sorry! You are not allowed login to this website!'
          });
        });
    },
    autoSignIn({ commit }, payload) {
      commit('setUser', { id: payload.uid });
    },
    logout({ commit }, payload) {
      fb.auth()
        .signOut()
        .then(() => {
          Toast.fire({
            icon: 'success',
            title: 'Logout successfully!'
          });
        })
        .catch(error => {
          console.log(error);
        });
      commit('setUser', payload);
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  }
};
