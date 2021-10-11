import { firebase } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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