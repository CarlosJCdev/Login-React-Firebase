import firebase from 'firebase';
import   'firebase/app';

const config= {
    apiKey: "AIzaSyDhO0YnfX3XBHNhJprG2waRs0T9aU6yRd8",
    authDomain: "login-react1.firebaseapp.com",
    databaseURL: "https://login-react1.firebaseio.com",
    projectId: "login-react1",
    storageBucket: "login-react1.appspot.com",
    messagingSenderId: "142550159246",
    appId: "1:142550159246:web:d869abfd9371b81428dedf"
};
const fire= firebase.initializeApp(config);
export default fire;
 