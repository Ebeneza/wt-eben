import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyB3i4rSHbdW9wtINeZU11SQf6HpBzOhOmM',
	authDomain: 'wt-eben-9d6a5.firebaseapp.com',
	projectId: 'wt-eben-9d6a5',
	storageBucket: 'wt-eben-9d6a5.appspot.com',
	messagingSenderId: '1067507576369',
	appId: '1:1067507576369:web:0e84e074b7af8a15b26f10',
}

const app = initializeApp(firebaseConfig)

//init services
export const auth = getAuth(app)

export const db = getFirestore()

//collection ref
export const colRef = collection(db, 'users')

export const storage = getStorage()
