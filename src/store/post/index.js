import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

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
      if (payload.date) {
        post.date = payload.date;
      }
    }
  },
  actions: {
    loadAllPosts({ commit }) {
      commit('setLoading', true);
      firebase
        .database()
        .ref('posts')
        .once('value')
        .then(data => {
          const posts = [];
          const obj = data.val();
          for (let key in obj) {
            posts.push({
              id: key,
              title: obj[key].title,
              tags: obj[key].tags,
              imageUrl: obj[key].imageUrl,
              content: obj[key].content,
              contentMD: obj[key].contentMD,
              date: obj[key].date
            });
          }
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
        date: payload.date.toISOString()
      };
      let imageUrl, key;
      firebase
        .database()
        .ref('posts')
        .push(post)
        .then(data => {
          key = data.key;
          return key;
        })
        .then(key => {
          const filename = payload.image.name;
          const ext = filename.slice(filename.lastIndexOf('.'));
          return firebase
            .storage()
            .ref('posts/' + key + '.' + ext)
            .put(payload.image);
        })
        .then(fileData => {
          return fileData.ref.getDownloadURL().then(imageUrl => {
            return firebase
              .database()
              .ref('posts')
              .child(key)
              .update({ imageUrl: imageUrl });
          });
        })
        .then(() => {
          commit('createPost', {
            ...post,
            imageUrl: imageUrl,
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
      if (payload.date) {
        updateObj.date = payload.date;
      }
      firebase
        .database()
        .ref('/posts/')
        .child(payload.id)
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
