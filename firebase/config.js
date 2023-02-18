import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBVksJN32M0fDzxb-gSkOiuesiLZ-HPbo8",
    authDomain: "javohirblog-27519.firebaseapp.com",
    projectId: "javohirblog-27519",
    storageBucket: "javohirblog-27519.appspot.com",
    messagingSenderId: "555992615259",
    appId: "1:555992615259:web:205e9cdfbf7a6815fcb27e",
    measurementId: "G-DHJRPFWGEM"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
export { db };