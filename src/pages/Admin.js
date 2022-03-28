import { getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { colRef } from '../auth/firebase'

function Admin() {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)

	const getUsers = async () => {
		try {
			getDocs(colRef)
				.then((snapshot) => {
					let usersData = []
					snapshot.docs.forEach((doc) => {
						usersData.push({ ...doc.data(), id: doc.id })
					})
					setUsers(usersData)
					setLoading(false)
				})
				.catch((err) => console.log(err))
		} catch (err) {
			console.log(err.message)
		}
	}

	useEffect(() => {
		getUsers()
	}, [])
	return (
		<div className='admin'>
			<h1>Admin Portal</h1>

			<h3>All Users</h3>
			{loading ? (
				<h4>Loading...</h4>
			) : (
				<table>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{users &&
							users.map((user) => (
								<tr>
									<td data-column='First Name'>{user.firstName}</td>
									<td data-column='Last Name'>{user.lastName}</td>
									<td data-column='Email'>{user.email}</td>
								</tr>
							))}
					</tbody>
				</table>
			)}
		</div>
	)
}

export default Admin
