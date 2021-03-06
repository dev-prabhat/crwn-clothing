import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCUNXNYEtQHhMIVaaOB2ulkdswosa_nVLQ",
    authDomain: "crwn-db-5aafa.firebaseapp.com",
    projectId: "crwn-db-5aafa",
    storageBucket: "crwn-db-5aafa.appspot.com",
    messagingSenderId: "680872060697",
    appId: "1:680872060697:web:2f5a3d0f62ccf4c5d5c788",
    measurementId: "G-EJ3G3S7HYP"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;