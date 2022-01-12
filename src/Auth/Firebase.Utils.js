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

export const signOut = () => {
    auth.signOut().then(() => {
        console.log('Sign-out successful');
    }).catch((error) => {
        console.error(error);
    });
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    //console.log(userAuth);

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  

export const createUser = async (auth, email, password, additionalData) => {
    auth.createUserWithEmailAndPassword(email, password) 
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(`User: ${user}`);
        // ...
        userCredential.updateProfile({...additionalData});        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.error(errorCode, errorMessage);
    })
};

export default firebase;