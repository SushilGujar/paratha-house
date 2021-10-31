import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyDW7M3vs7cini5t8ky7-LV5zVqtJxIjQ8E",
    authDomain: "paratha-house.firebaseapp.com",
    projectId: "paratha-house",
    storageBucket: "paratha-house.appspot.com",
    messagingSenderId: "1065555200022",
    appId: "1:1065555200022:web:56d10735b618596ae08d37",
    measurementId: "G-D2MGX41HGE"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;