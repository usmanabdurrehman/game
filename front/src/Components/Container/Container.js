import React from 'react'
import styles from './Container.module.css'

export default function Container({children,...rest}) {
	return (
		<div className={styles.container} {...rest}>
			{children}
		</div>
	)
}