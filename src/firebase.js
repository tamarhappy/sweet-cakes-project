import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBI3nRLfHntUt65NgSPSshXPr8aoabtkD4",
    authDomain: "sweet-cakes-project.firebaseapp.com",
    projectId: "sweet-cakes-project",
    storageBucket: "sweet-cakes-project.appspot.com",
    messagingSenderId: "791588661752",
    appId: "1:791588661752:web:d90e239caf7976eea34e0d",
    measurementId: "G-QG0883V23C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};