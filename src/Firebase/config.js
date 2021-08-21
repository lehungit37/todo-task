import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDSjeR8iQG4mDXVx2vDEJqCgW20dnoj3_E",
  authDomain: "notereactjs-ec46f.firebaseapp.com",
  databaseURL: "https://notereactjs-ec46f-default-rtdb.firebaseio.com",
  projectId: "notereactjs-ec46f",
  storageBucket: "notereactjs-ec46f.appspot.com",
  messagingSenderId: "247994189541",
  appId: "1:247994189541:web:df02e1336c41234248760c",
  measurementId: "G-8V4VX9JFP1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
