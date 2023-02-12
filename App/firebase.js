import * as firebase from 'firebase';

//highlight version 8 vs version 

const firebaseConfig = {
  apiKey: 'AIzaSyC3skOYrXJiYo9UT73D76MlVA_PIGEEWaw',

  authDomain: 'fir-react-1c37c.firebaseapp.com',

  projectId: 'fir-react-1c37c',

  storageBucket: 'fir-react-1c37c.appspot.com',

  messagingSenderId: '295577951827',

  appId: '1:295577951827:web:50557a8ed771a39f5b30a6',

  measurementId: 'G-08P47E0R8E',
};

//Initialize Firebase
let fireBaseApp;
if (!firebase.apps.length) {
  fireBaseApp = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app(); // if already initialized, use that one
}

export default fireBaseApp;