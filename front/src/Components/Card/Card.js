import React from "react";
import styles from "./Card.module.css";

export default function Card({ card: { price,id,services } }) {
	let linGrad = [
		"linear-gradient(to bottom, #0575E6, #021B79)",
		"linear-gradient(to bottom, #8e0e00, #1f1c18)",
		"linear-gradient(to bottom, #f00000, #dc281e)",
	];

	return (
		<div className={styles.card} style={{backgroundImage:linGrad[id-1]}}>
			<div className={styles.cardPrice}>
				<h1>{`${price}$`}</h1>
			</div>
			<div className={styles.cardServices}>
				{services.map(service=><div>{service}</div>)}
			</div>
		</div>
	);
}
