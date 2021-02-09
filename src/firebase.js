import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtZmLWbLRiKbI4feSt5wVwAiB6_czeHsg",
  authDomain: "slack-clone-43034.firebaseapp.com",
  databaseURL: "https://slack-clone-43034.firebaseio.com",
  projectId: "slack-clone-43034",
  storageBucket: "slack-clone-43034.appspot.com",
  messagingSenderId: "844617038106",
  appId: "1:844617038106:web:5fab187ea17ebfb8e454a3",
  measurementId: "G-7QGKK8G66Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
