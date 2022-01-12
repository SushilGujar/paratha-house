import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: "G-D2MGX41HGE"
};


const Auth_Phone_Signin = (e) => {
    initializeApp(firebaseConfig);
    console.log(`event: ${e.phone}`);
    const auth = getAuth();
    auth.useDeviceLanguage();
    let phone = '6155136362';
    
    const recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
            console.log(`Recaptcha Verified. Result: ${response}`);
        }, auth,
    });
    const appVerifier = recaptchaVerifier;
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