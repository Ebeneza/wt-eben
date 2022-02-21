import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Download from './components/Download'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth'
import { auth } from './auth/firebase'

function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loginEmail, setLoginEmail] = useState('')
	const [loginPassword, setLoginPassword] = useState('')
	const [err, setErr] = useState('')

	const [user, setUser] = useState({})

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser)
	})

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password)
		} catch (err) {
			setErr(err.message)
		}
	}
	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			)
		} catch (err) {
			console.log(err.message)
		}
	}
	const loginForm = (e) => {
		e.preventDefault()
		login()
	}
	const logout = async () => {
		await signOut(auth)
		setUser({})
	}
	const formSubmit = (e) => {
		e.preventDefault()
		register()
	}

	return (
		<Router>
			<header className='container '>
				<Link to='/' className='logo clr-transition'>
					WT-EBEN
				</Link>
				<nav className='navbar'>
					<ul className='nav-items'>
						<li className='nav-item'>
							<Link to='/' className='nav-link clr-transition'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/products' className='nav-link clr-transition'>
								Product
							</Link>
						</li>
						{user ? (
							<>
								<li className='nav-item'>
									<Link to='/user' className='nav-link-user'>
										{user.email}
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										to='login'
										className='nav-link clr-transition'
										onClick={logout}>
										Logout
									</Link>
								</li>
							</>
						) : (
							<>
								<li className='nav-item'>
									<Link to='login' className='nav-link clr-transition'>
										Login
									</Link>
								</li>
								<li className='nav-item'>
									<Link to='/signup' className='nav-link clr-transition'>
										Sign up
									</Link>
								</li>
							</>
						)}
					</ul>
					<div className='social-links'>
						<ul>
							<li>
								<i className='bx bxl-instagram nav-icon clr-transition'></i>
							</li>
							<li>
								<i className='bx bxl-twitter nav-icon clr-transition'></i>
							</li>
							<li>
								<i className='bx bxl-facebook nav-icon clr-transition'></i>
							</li>
						</ul>
					</div>
				</nav>

				<div className='menu-togglers'>
					<i className='bx bx-menu menu-toggle clr-transition'></i>
				</div>
				<link
					href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css'
					rel='stylesheet'
				/>
			</header>
			<div className='main-body'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/download'
						element={user ? <Download /> : <Navigate replace to='/login' />}
					/>
					<Route
						path='/login'
						element={
							user ? (
								<Navigate replace to='/' />
							) : (
								<div className='container'>
									<form className='form-container' onSubmit={loginForm}>
										<h1 className='heading'>Ebeneza</h1>

										<input
											type='email'
											name='email'
											id='email'
											placeholder='Enter Your Email Address'
											required
											onChange={(e) => setLoginEmail(e.target.value)}></input>
										<input
											type='password'
											name='password'
											placeholder='Enter password'
											required
											onChange={(e) =>
												setLoginPassword(e.target.value)
											}></input>
										<button className='btn'>Login</button>

										<p className='info-account'>
											Don't have an account?{' '}
											<Link to='/signup'>Create an account</Link>{' '}
										</p>
									</form>
								</div>
							)
						}
					/>
					<Route
						path='/signup'
						element={
							user ? (
								<Navigate replace to='/' />
							) : (
								<div className='container'>
									<form className='form-container' onSubmit={formSubmit}>
										<h1 className='heading'>Sign Up</h1>
										<input
											type='email'
											name='email'
											placeholder='Enter Your Email Address'
											required
											onChange={(e) => setEmail(e.target.value)}></input>
										<input
											type='password'
											name='password'
											placeholder='Enter password'
											required
											onChange={(e) => setPassword(e.target.value)}></input>
										<button className='btn'>Sign up</button>
										{err && <p className='info-account'> {err}</p>}
										<p className='info-account'>
											Already have an account? <Link to='/login'>Login</Link>{' '}
										</p>
									</form>
								</div>
							)
						}
					/>
				</Routes>
			</div>
			<Footer />
		</Router>
	)
}

export default App
