import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAuDM3y9uz67VmQLZ7xB7QZa4FNgGIVc6s",
    authDomain: "crwn-db-dd701.firebaseapp.com",
    databaseURL: "https://crwn-db-dd701.firebaseio.com",
    projectId: "crwn-db-dd701",
    storageBucket: "crwn-db-dd701.appspot.com",
    messagingSenderId: "1037827052767",
    appId: "1:1037827052767:web:2f866ce5e3fb4373d7056a",
    measurementId: "G-CPEQLFKZF5"
};


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
