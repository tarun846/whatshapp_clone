import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDU8mIAYfxACeTpwVuXoXTtdpCMuZl9G7I",
  authDomain: "whatsapp-clone-1620b.firebaseapp.com",
  projectId: "whatsapp-clone-1620b",
  storageBucket: "whatsapp-clone-1620b.appspot.com",
  messagingSenderId: "58228215116",
  appId: "1:58228215116:web:8b1ad3aed56f26224553e9"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref("images");
const audioStorage = firebase.storage().ref("audios");
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
  db,
  auth,
  provider,
  storage,
  audioStorage,
  createTimestamp,
  serverTimestamp,
};
