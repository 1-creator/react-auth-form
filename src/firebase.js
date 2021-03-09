import firebase from 'firebase';
import * as firebaseui from 'firebaseui'


//firebase config info
var firebaseConfig = {
    apiKey: "AIzaSyCJJKZQzI_JumBZzHcy0mrCEja9e7fVJVw",
    authDomain: "authform-4d7d6.firebaseapp.com",
    projectId: "authform-4d7d6",
    storageBucket: "authform-4d7d6.appspot.com",
    messagingSenderId: "587709552247",
    appId: "1:587709552247:web:e1facee08fa13d2cf95872"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const authUI = new firebaseui.auth.AuthUI(auth);