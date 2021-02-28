import React from 'react'
import Container from '../Container/Container'
import styles from './HeroWrapper.module.css'

export default function HeroWrapper() {
	return (
		<div className={styles.heroWrapper}>
			<Container className={styles.heroContainer}>
				<h1>Witness the next gen of racing in STF 4</h1>
			</Container>
		</div>
	)
}