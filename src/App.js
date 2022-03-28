import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Download from './components/Download'

import { useState } from 'react'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth'
import { auth } from './auth/firebase'
import { getDocs, addDoc, collection } from 'firebase/firestore'
import { colRef, db } from './auth/firebase'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Admin from './pages/Admin'

function App() {
	const [err, setErr] = useState('')
	const [passwordError, setPasswordError] = useState(false)
	const [user, setUser] = useState({})

	const [loginEmail, setLoginEmail] = useState('')
	const [loginPassword, setLoginPassword] = useState('')

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser)
	})

	const login = async () => {
		try {
			const loggedInUser = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			)
		} catch (err) {
			console.log(err.message)
		}
	}

	const logout = async () => {
		await signOut(auth)
		setUser({})
	}

	return (
		<Router>
			<Navbar user={user} logout={logout} login={login} />
			<div className='main-body'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/admin' element={<Admin />} />
					<Route
						path='/download'
						element={user ? <Download /> : <Navigate replace to='/login' />}
					/>
					<Route
						path='/login'
						element={
							<Login
								user={user}
								err={err}
								loginEmail={loginEmail}
								loginPassword={loginPassword}
								setLoginEmail={setLoginEmail}
								setLoginPassword={setLoginPassword}
							/>
						}
					/>
					<Route
						path='/signup'
						element={
							<Signup
								user={user}
								err={err}
								setErr={setErr}
								passwordError={passwordError}
								setPasswordError={setPasswordError}
							/>
						}
					/>
				</Routes>
			</div>
			<Footer />
		</Router>
	)
}

export default App
