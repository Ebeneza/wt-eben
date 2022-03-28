import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { Navigate } from 'react-router'
import { Link } from 'react-router-dom'
import { auth, db } from '../auth/firebase'

function Signup({ user, err, setErr, passwordError, setPasswordError }) {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const [loading, setLoading] = useState(false)

	const register = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password)
			setLoading(false)
		} catch (err) {
			setErr(err.message)
			setLoading(false)
		}
	}

	const saveUser = async () => {
		await addDoc(collection(db, 'users'), {
			firstName,
			lastName,
			email,
		})
	}

	const formSubmit = (e) => {
		setLoading(true)
		e.preventDefault()
		console.log('Clicked')
		if (password === confirmPassword) {
			setPasswordError(false)
			saveUser().then((res) => {
				register()
			})
		} else {
			setPasswordError(true)
		}
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
						<form className='form-container' onSubmit={formSubmit}>
							<h1 className='heading'>Sign Up</h1>
							<input
								type='text'
								name='firstName'
								placeholder='Enter Your First Name'
								required
								onChange={(e) => setFirstName(e.target.value)}></input>
							<input
								type='text'
								name='lastName'
								placeholder='Enter Your Last Name'
								required
								onChange={(e) => setLastName(e.target.value)}></input>
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
							<input
								type='password'
								name='confirmP'
								placeholder='Confirm Password'
								required
								onChange={(e) => setConfirmPassword(e.target.value)}></input>
							{passwordError && (
								<p style={{ color: 'red' }}>'Your password does not match!!'</p>
							)}
							<button className='btn'>Sign up</button>
							{err && <p className='info-account'> {err}</p>}
							<p className='info-account'>
								Already have an account? <Link to='/login'>Login</Link>{' '}
							</p>
						</form>
					)}
				</div>
			)}
		</>
	)
}

export default Signup
