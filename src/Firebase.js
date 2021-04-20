import firebase from "firebase"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db =firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();
const gAuthProvider=new firebase.auth.GoogleAuthProvider();

export {db,auth,gAuthProvider,storage};