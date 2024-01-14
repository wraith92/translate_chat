import {getApp,getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import { getFunctions } from 'firebase/functions';
import exp from 'constants';


const firebaseConfig = {
  apiKey: "AIzaSyC9jfxXENMKw-nnzPmEx66u8ecaRRQgNy0",
  authDomain: "translate-app-d1141.firebaseapp.com",
  projectId: "translate-app-d1141",
  storageBucket: "translate-app-d1141.appspot.com",
  messagingSenderId: "825970944934",
  appId: "1:825970944934:web:da527b130736df760bfd67",
  measurementId: "G-VVZD3NLKWW"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export {app, auth, db, functions};
