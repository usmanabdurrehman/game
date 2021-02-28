import React from 'react'
import styles from './CardContainer.module.css'
import Card from '../Card/Card'

export default function CardContainer({cards}) {
	return (
		<div className={styles.cardContainer}>
			{cards.map(card=><Card card={card}/>)}
		</div>
	)
}