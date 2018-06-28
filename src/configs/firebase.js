import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  // paste firebase config here
};

firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();

export {
  db,
  auth,
};
