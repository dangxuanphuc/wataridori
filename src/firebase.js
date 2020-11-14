import firebase from 'firebase/app';
require('firebase/auth');
require('firebase/firestore');
require('firebase/storage');

const config = {
  apiKey: 'AIzaSyCbH2nmd-wFo1gKB8klW2Bkr0H7cBCH66Q',
  authDomain: 'wataridori-blog.firebaseapp.com',
  databaseURL: 'https://wataridori-blog.firebaseio.com',
  projectId: 'wataridori-blog',
  storageBucket: 'wataridori-blog.appspot.com'
};

const fb = firebase.initializeApp(config);

export default fb;
