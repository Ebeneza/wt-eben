import { Link } from 'react-router-dom'

function Home() {
	return (
		<div>
			<main id='hero' className='main'>
				<section className='section section-one'>
					<div className='container hook-container'>
						<h1 className='hook-title clr-transition'>
							Penetration Testing Service
						</h1>
						<h2 className='hook-sub_title clr-transition'>
							Windows Trojan by Eben and Samora.
						</h2>
						<div className='hero-btns-container'>
							<Link to='/download' className='link-btn'>
								<button className='button btn-hero btn-primary buy-hero-btn '>
									Download Trojan
								</button>
							</Link>
							<Link to='/documentation' className='link-btn'>
								<button className='button btn-hero btn-second-alt'>
									Documentation
								</button>
							</Link>
						</div>
					</div>

					<img
						src='./eben2.png'
						alt='trojan'
						className='hero-lock-img'
						loading='lazy'
					/>
				</section>
			</main>
		</div>
	)
}

export default Home
