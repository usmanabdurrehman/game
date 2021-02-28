import React from 'react'
import styles from './Card.module.css'

export default function Card({card:{price}}) {
	return (
		<div className={styles.card}>
			<div><h1>{`${price} $`}</h1></div>
		</div>
	)
}