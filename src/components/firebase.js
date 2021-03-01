import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDqQzekKhROZ_F_S7LWxBtMtXaBOaEP_3I',
  authDomain: 'ayuwindra-17c69.firebaseapp.com',
  projectId: 'ayuwindra-17c69',
  storageBucket: 'ayuwindra-17c69.appspot.com',
  messagingSenderId: '1097000107668',
  appId: '1:1097000107668:web:1bafa9ff49cd1543cb7e81',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
