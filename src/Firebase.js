import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    
  };
  var firebaseApp;
  if (!firebase.apps.length) {
    firebaseApp=firebase.initializeApp(firebaseConfig);
  }
  
const db =firebaseApp.firestore();
const auth=firebaseApp.auth();
const storage=firebaseApp.storage();
const gAuthProvider=new firebase.auth.GoogleAuthProvider();

export {db,auth,gAuthProvider,storage,firebaseApp};