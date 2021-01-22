import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyADSNwZyZ8sgx29fYqhPuZ-s5FoTc5fZaA",
  authDomain: "vue-ten-e345e.firebaseapp.com",
  projectId: "vue-ten-e345e",
  storageBucket: "vue-ten-e345e.appspot.com",
  messagingSenderId: "258028145142",
  appId: "1:258028145142:web:0fa558fb46489aa14adfd7",
  databaseURL: "https://vue-ten-e345e-default-rtdb.europe-west1.firebasedatabase.app",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;