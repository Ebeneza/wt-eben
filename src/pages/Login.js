import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Navigate } from 'react-router'
import { Link } from 'react-router-dom'
import { auth } from '../auth/firebase'

function Login({
	user,
	loginEmail,
	loginPassword,
	setLoginEmail,
	setLoginPassword,
}) {
	const [loading, setLoading] = useState(false)
	const [loginErr, setLoginErr] = useState('')
	const login = async () => {
		try {
			const loggedInUser = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			)
			setLoginErr('')
			setLoading(false)
		} catch (err) {
			setLoginErr(err.message)
			setLoading(false)
			console.log(err.message)
		}
	}
	const loginForm = (e) => {
		setLoading(true)
		e.preventDefault()
		login()
	}
	return (
		<>
			{user ? (
				<Navigate replace to='/' />
			) : (
				<div className='container'>
					{loading ? (
						<h4>Loading...</h4>
					) : (
						<form className='form-container' onSubmit={loginForm}>
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
								onChange={(e) => setLoginPassword(e.target.value)}></input>

							{loginErr && <p style={{ color: 'red' }}>{loginErr}</p>}
							<button className='btn'>Login</button>

							<p className='info-account'>
								Don't have an account?{' '}
								<Link to='/signup'>Create an account</Link>{' '}
							</p>
						</form>
					)}
				</div>
			)}
		</>
	)
}

export default Login
