import React from 'react'
import styles from './Footer1.module.css'
import Container from '../Container/Container'

export default function Footer1() {
	return (
		<div className={styles.footer1}>
			<Container className={styles.footer1container}>
				STF4 Copyright 2021
			</Container>
		</div>
	)
}