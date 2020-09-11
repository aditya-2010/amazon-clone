import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5PEb9zxoUvvW7cuLb3qbB3PgH8I_KGoI",
  authDomain: "clone-399a8.firebaseapp.com",
  databaseURL: "https://clone-399a8.firebaseio.com",
  projectId: "clone-399a8",
  storageBucket: "clone-399a8.appspot.com",
  messagingSenderId: "680469565644",
  appId: "1:680469565644:web:6cf90ebeafb872c05eb269",
  measurementId: "G-T34ZPGKJS4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
