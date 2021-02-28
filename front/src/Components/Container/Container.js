import React from 'react'
import styles from './Container.module.css'

export default function Container({children,className,...rest}) {
	return (
		<div className={`${styles.container} ${className}`} {...rest}>
			{children}
		</div>
	)
}