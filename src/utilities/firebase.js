import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyADSNwZyZ8sgx29fYqhPuZ-s5FoTc5fZaA",
  authDomain: "vue-ten-e345e.firebaseapp.com",
  projectId: "vue-ten-e345e",
  storageBucket: "vue-ten-e345e.appspot.com",
  messagingSenderId: "258028145142",
  appId: "1:258028145142:web:0fa558fb46489aa14adfd7",
};
firebase.initializeApp(firebaseConfig);

export default firebase;