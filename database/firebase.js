import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBipp1R_2HXF6Sxwfu0i-cLhQahJRyMw7M",
  authDomain: "myapp-8de68.firebaseapp.com",
  projectId: "myapp-8de68",
  storageBucket: "myapp-8de68.appspot.com",
  messagingSenderId: "505019657309",
  appId: "1:505019657309:web:34ca0f2eaaadaba93771b4",
  measurementId: "G-CJY3CQM7KL"
};

firebase.initializeApp(firebaseConfig);

export default firebase;