import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	Typography,
	Link,
} from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'

import React, { useEffect, useState } from 'react'
import { getDownloadURL, ref, getStorage, getBlob } from 'firebase/storage'
import { storage } from '../auth/firebase'
import '../cors.json'

function Download() {
	const [loading, setLoading] = useState(true)
	const [virus1, setVirus1] = useState({
		name: 'AVGAntivirus_11712.ico',
		url: '',
	})
	const [virus2, setVirus2] = useState({
		name: 'Avast_Antivirus_23633.ico',
		url: '',
	})
	const [virus3, setVirus3] = useState({
		name: 'Google_Chrome_icon-icons.com_66794.ico',
		url: '',
	})
	const [virus4, setVirus4] = useState({
		name: 'microsoft_office_excel_logo_icon_145720.ico',
		url: '',
	})
	const [virus5, setVirus5] = useState({
		name: 'microsoft_office_word_logo_icon_145724.ico',
		url: '',
	})
	const [virus6, setVirus6] = useState({
		name: 'microsoft_power_point_office_logo_icon_145723.ico',
		url: '',
	})
	const [virus7, setVirus7] = useState({
		name: 'file_type_pdf_icon_130274.ico',
		url: '',
	})
	const [viruses, setViruses] = useState([])

	useEffect(() => {
		getDownloadURL(ref(storage, `trojans/${virus1.name}`))
			.then((url) => {
				setVirus1({ name: virus1.name, url: url })
			})
			.catch((error) => {
				console.log('Error getting files: ', error)
			})
		getDownloadURL(ref(storage, `trojans/${virus2.name}`))
			.then((url) => {
				setVirus2({ name: virus2.name, url: url })
			})
			.catch((error) => {
				console.log('Error getting files: ', error)
			})
		getDownloadURL(ref(storage, `trojans/${virus3.name}`))
			.then((url) => {
				setVirus3({ name: virus3.name, url: url })
			})
			.catch((error) => {
				console.log('Error getting files: ', error)
			})
		getDownloadURL(ref(storage, `trojans/${virus4.name}`))
			.then((url) => {
				setVirus4({ name: virus4.name, url: url })
			})
			.catch((error) => {
				console.log('Error getting files: ', error)
			})
		getDownloadURL(ref(storage, `trojans/${virus5.name}`))
			.then((url) => {
				setVirus5({ name: virus5.name, url: url })
			})
			.catch((error) => {
				console.log('Error getting files: ', error)
			})
		getDownloadURL(ref(storage, `trojans/${virus6.name}`))
			.then((url) => {
				setVirus6({ name: virus6.name, url: url })
			})
			.catch((error) => {
				console.log('Error getting files: ', error)
			})
		getDownloadURL(ref(storage, `trojans/${virus7.name}`))
			.then((url) => {
				setVirus7({ name: virus7.name, url: url })
				setViruses([virus1, virus2, virus3, virus4, virus5, virus6, virus7])
				setLoading(false)
				console.log(viruses)
			})
			.catch((error) => {
				console.log('Error getting files: ', error)
			})
	}, [])

	const handleDownload = (url) => {
		console.log('Clicked')
		const xhr = new XMLHttpRequest()
		xhr.onload = (e) => {
			const blob = xhr.response

			console.log('blob:', blob)
		}
		xhr.open('GET', url)
		xhr.send()
	}

	return (
		<div className='container'>
			<Typography variant='h3'>Download Links</Typography>

			<Grid container spacing={2}>
				{loading ? (
					<Typography variant='h4' sx={{ marginTop: 2, marginLeft: 2 }}>
						Loading...
					</Typography>
				) : (
					<>
						{viruses.map((virus) => (
							<Grid
								item
								md={5}
								sx={{ marginBottom: 2, marginLeft: 2, marginTop: 2 }}>
								<Card sx={{ minWidth: 275, maxWidth: 600 }}>
									<CardContent>
										<Typography
											sx={{ fontSize: 14 }}
											color='text.secondary'
											gutterBottom>
											{virus.name}
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											size='small'
											onClick={(e) => handleDownload(virus.url)}>
											<DownloadIcon />
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</>
				)}
			</Grid>
		</div>
	)
}

export default Download
