import React from 'react'
import styles from './Navbar.module.css'
import Container from '../Container/Container'

export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<Container className={styles.navbarWrapper}>
				<div className="logo">
					<h1>STF 4</h1>
				</div>
				<div className={styles.menu}>
					<div>Home</div>
					<div>About</div>
					<div>Contact</div>
					<div>Help?</div>
				</div>
			</Container>	
		</div>
	)
}