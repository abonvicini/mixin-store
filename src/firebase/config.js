import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBMjjRa4CJi0h18dZbRSRm9XanP_6CFp34',
  authDomain: 'mixin-store.firebaseapp.com',
  projectId: 'mixin-store',
  storageBucket: 'mixin-store.appspot.com',
  messagingSenderId: '151016726291',
  appId: '1:151016726291:web:19a4a247e1ce0c1a8ac4e6',
  measurementId: 'G-SLMSKD14XE',
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
  return firebase.firestore(app);
};

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const authInstace = firebase.auth();
