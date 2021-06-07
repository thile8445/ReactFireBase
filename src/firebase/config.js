// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAs4uZsAorOaiHWy2j46-2R4MHx30eECsA',
  authDomain: 'reactfirebase-8f64f.firebaseapp.com',
  projectId: 'reactfirebase-8f64f',
  storageBucket: 'reactfirebase-8f64f.appspot.com',
  messagingSenderId: '1099123129855',
  appId: '1:1099123129855:web:18121fbb65d90328407bca',
  measurementId: 'G-XVH94QJ4WG',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export {firebase};
