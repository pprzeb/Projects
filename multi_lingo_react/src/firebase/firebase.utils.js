import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCxJXkoCiaV8_k16uUqDqHBtAPQ-c33Gwo",
    authDomain: "multi-lingo-2a730.firebaseapp.com",
    databaseURL: "https://multi-lingo-2a730.firebaseio.com",
    projectId: "multi-lingo-2a730",
    storageBucket: "multi-lingo-2a730.appspot.com",
    messagingSenderId: "36306057741",
    appId: "1:36306057741:web:db3915e5230d670230b344"
  };

firebase.initializeApp(config);

export const createUserProfile = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`)

   const snapShot = await userRef.get()

   if (!snapShot.exists) {
     const {displayName, email} = userAuth;
     const createdAt = new Date();
     try {
       await userRef.set({ 
         displayName,
         email,
         createdAt,
         ...additionalData
       })
     } catch (err) {
       console.log('error creating user', err)
     }
   }
   
return userRef
}

export const addWordsToDB = async (userAuth, data) => {
  if (!userAuth) return;

  const wordsRef = firestore.collection('users').doc(`${userAuth.id}`).collection('words')
 
  const createdAt = new Date();
  const {...all} = data
  try {
    await wordsRef.add({
      createdAt,
      ...all
    })
    console.log('added with success')
  } catch (err) {
    console.log('error adding word', err)
  }
  
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('email')
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

