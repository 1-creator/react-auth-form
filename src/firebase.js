import firebase from 'firebase';
import * as firebaseui from 'firebaseui'


//your firebase config info
var firebaseConfig = {
    
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const authUI = new firebaseui.auth.AuthUI(auth);
