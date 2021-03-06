import fb from '@/firebase.js';

export default {
  state: {
    loadAllPosts: []
  },
  mutations: {
    setLoadPosts(state, payload) {
      state.loadAllPosts = payload;
    },
    createPost(state, payload) {
      state.loadAllPosts.push(payload);
    },
    updatePost(state, payload) {
      const post = state.loadAllPosts.find(post => {
        return post.id === payload.id;
      });
      if (payload.title) {
        post.title = payload.title;
      }
      if (payload.tags) {
        post.tags = payload.tags;
      }
      if (payload.content) {
        post.content = payload.content;
      }
      if (payload.contentMD) {
        post.contentMD = payload.contentMD;
      }
    }
  },
  actions: {
    loadAllPosts({ commit }) {
      commit('setLoading', true);
      fb.firestore()
        .collection('posts')
        .get()
        .then(querySnapshot => {
          const posts = [];
          querySnapshot.forEach(doc => {
            const data = doc.data();
            posts.push({
              id: doc.id,
              title: data.title,
              tags: data.tags,
              imageUrl: data.imageUrl,
              content: data.content,
              contentMD: data.contentMD,
              date: data.date
            });
          });
          commit('setLoadPosts', posts);
          commit('setLoading', false);
        })
        .catch(error => {
          console.log(error);
          commit('setLoading', true);
        });
    },
    createPost({ commit }, payload) {
      const post = {
        title: payload.title,
        tags: payload.tags,
        content: payload.content,
        contentMD: payload.contentMD,
        imageUrl: payload.imageUrl,
        date: payload.date.toISOString()
      };
      let key;
      fb.firestore()
        .collection('posts')
        .add(post)
        .then(data => {
          key = data.id;
          return key;
        })
        .then(() => {
          commit('createPost', {
            ...post,
            id: key
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    updatePostData({ commit }, payload) {
      commit('setLoading', true);
      const updateObj = {};
      if (payload.title) {
        updateObj.title = payload.title;
      }
      if (payload.tags) {
        updateObj.tags = payload.tags;
      }
      if (payload.content) {
        updateObj.content = payload.content;
      }
      fb.firestore()
        .collection('posts')
        .doc(payload.id)
        .update(updateObj)
        .then(() => {
          commit('setLoading', false);
          commit('updatePost', payload);
        })
        .catch(error => {
          console.log(error);
          commit('setLoading', true);
        });
    }
  },
  getters: {
    loadAllPosts(state) {
      return state.loadAllPosts.sort((postA, postB) => {
        return new Date(postB.date) - new Date(postA.date);
      });
    },
    loadPost(state) {
      return postId => {
        return state.loadAllPosts.find(post => {
          return post.id === postId;
        });
      };
    },
    popularPosts(state, getters) {
      return getters.loadAllPosts.slice(0, 3);
    },
    loadTags(state) {
      const tagArr = [];
      const postNumber = state.loadAllPosts.length;
      for (let i = 0; i < postNumber; i++) {
        tagArr.push(...state.loadAllPosts[i].tags);
      }
      const tags = Array.from(new Set(tagArr));
      return tags;
    }
  }
};
