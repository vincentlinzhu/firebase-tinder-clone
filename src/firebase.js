import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCbL0fYVXDkgs0boB5pBLzi975NCaVMWJ8",
  authDomain: "fir-tinder-clone.firebaseapp.com",
  databaseURL: "https://fir-tinder-clone-default-rtdb.firebaseio.com",
  projectId: "fir-tinder-clone",
  storageBucket: "fir-tinder-clone.appspot.com",
  messagingSenderId: "499904647927",
  appId: "1:499904647927:web:acf479e0824ad2e806f9f2",
  measurementId: "G-V2GVV6MWRV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
