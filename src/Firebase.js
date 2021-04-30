import firebase from "firebase"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAAmo1e4MTqaUTa6CWVEqkPFMJFrC0m-ls",
  authDomain: "database-ffit.firebaseapp.com",
  projectId: "database-ffit",
  storageBucket: "database-ffit.appspot.com",
  messagingSenderId: "622188285868",
  appId: "1:622188285868:web:925a96137a8d7262577409"

  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db =firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();
const gAuthProvider=new firebase.auth.GoogleAuthProvider();

export {db,auth,gAuthProvider,storage,firebaseApp};