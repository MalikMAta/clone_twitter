// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCaa0f3pRz9tc6osXEFrPE9MDzeNEKXXbU",
    authDomain: "twitter-clone-205de.firebaseapp.com",
    databaseURL: "https://twitter-clone-205de.firebaseio.com",
    projectId: "twitter-clone-205de",
    storageBucket: "twitter-clone-205de.appspot.com",
    messagingSenderId: "523088030078",
    appId: "1:523088030078:web:740df94d694edf73182b2f",
    measurementId: "G-6FLS841K23"
  };



  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;