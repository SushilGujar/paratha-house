import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDW7M3vs7cini5t8ky7-LV5zVqtJxIjQ8E",
    authDomain: "paratha-house.firebaseapp.com",
    projectId: "paratha-house",
    storageBucket: "paratha-house.appspot.com",
    messagingSenderId: "1065555200022",
    appId: "1:1065555200022:web:56d10735b618596ae08d37",
    measurementId: "G-D2MGX41HGE"
};


const Auth_Phone_Signin = (e) => {
    initializeApp(firebaseConfig);
    console.log(`event: ${e.phone}`);
    const auth = getAuth();
    auth.useDeviceLanguage();
    let phone = '6155136362';
    
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
            console.log(`Recaptcha Verified. Result: ${response}`);
        }, auth,
    });
    const appVerifier = window.recaptchaVerifier;
    console.log(`appVerifier: ${appVerifier}`);
    
    signInWithPhoneNumber(auth, phone, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log(confirmationResult);
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          console.error(error);
        });
}    

export default Auth_Phone_Signin;