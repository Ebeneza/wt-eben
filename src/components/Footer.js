import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer id='contact' class='footer container'>
			<h2 class='footer-title'>Contact</h2>
			<form class='contact-form'>
				<div class='name-email-inputs-container'>
					<div class='form-control'>
						<label for='name' class='form-label'>
							Name
						</label>
						<input type='text' id='name' class='normal-input all-input' />
					</div>
					<div class='form-control'>
						<label for='email' class='form-label'>
							Email
						</label>
						<input type='text' id='email' class='normal-input all-input' />
					</div>
				</div>

				<div class='form-control'>
					<label for='message' class='form-label'>
						Message
					</label>
					<textarea
						id='message'
						cols='30'
						rows='10'
						class='textarea-input all-input'></textarea>
				</div>
				<button type='submit' class='send-msg-btn button ad-buy-btn'>
					SEND
				</button>
			</form>

			<div class='other-footer-infos-container'>
				<span class='footer-info'>
					<i class='bx bx-map'></i> Address, floor 23, Jupiter
				</span>
				<span class='footer-info'>
					<i class='bx bx-phone'></i> 22 (923) 3424 4156
				</span>
				<span class='footer-info'>
					<i class='bx bx-mail-send'></i> ebenpen@email.com
				</span>
				<div class='footer-social-links'>
					<ul>
						<li>
							<i class='bx bxl-instagram-alt nav-icon clr-transition'></i>
						</li>
						<li>
							<i class='bx bxl-twitter nav-icon clr-transition'></i>
						</li>
						<li>
							<i class='bx bxl-facebook-square nav-icon clr-transition'></i>
						</li>
					</ul>
				</div>
			</div>
			<div class='lower-footer'>
				<span class='lower-footer-elt copy'>copyright © 2022 eBen</span>
				<span class='lower-footer-elt developer'>
					Developed by
					<Link to='/'>Ebeneza</Link>
				</span>
				<span class='lower-footer-elt policy'>
					<Link to='#' class='policy-link'>
						Privacy • Policy
					</Link>
				</span>
			</div>
		</footer>
	)
}

export default Footer
