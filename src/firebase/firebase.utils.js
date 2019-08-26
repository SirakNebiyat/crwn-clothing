import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD3K_LRJH47mvMqv0QA8K76akyhOIpj9hY',
	authDomain: 'crwn-db-de245.firebaseapp.com',
	databaseURL: 'https://crwn-db-de245.firebaseio.com',
	projectId: 'crwn-db-de245',
	storageBucket: '',
	messagingSenderId: '833057957506',
	appId: '1:833057957506:web:74028237f15a3bc9'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
