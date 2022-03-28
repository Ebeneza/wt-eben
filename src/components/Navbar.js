import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ user, logout, login }) {
	return (
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
								<Link to='signup' className='nav-link clr-transition'>
									Sign up
								</Link>
							</li>
						</>
					)}
					{user && user.email === 'ebenleonad@gmail.com' ? (
						<li className='nav-item'>
							<Link to='/admin' className='nav-link clr-transition'>
								Admin
							</Link>
						</li>
					) : (
						<></>
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
	)
}

export default Navbar
