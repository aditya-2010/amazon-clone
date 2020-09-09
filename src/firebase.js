import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC3Ymu1vM_qt44mqbLcE8xXACz8wRlAn-A",
  authDomain: "clone-ab6d5.firebaseapp.com",
  databaseURL: "https://clone-ab6d5.firebaseio.com",
  projectId: "clone-ab6d5",
  storageBucket: "clone-ab6d5.appspot.com",
  messagingSenderId: "33280237855",
  appId: "1:33280237855:web:863d97b57c0182e59e102a",
  measurementId: "G-G3XXDS33KJ",
});

// const db = firebaseApp.firestore();
export const auth = firebaseApp && firebase.auth();

// export { auth };
