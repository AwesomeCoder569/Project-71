import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBYr-vhWmqmikTBY_Ent6Tze5sN95_r_so",
    authDomain: "e-ride-app-64d39.firebaseapp.com",
    projectId: "e-ride-app-64d39",
    storageBucket: "e-ride-app-64d39.appspot.com",
    messagingSenderId: "296549039136",
    appId: "1:296549039136:web:9927459d9238bfc4c39045"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
