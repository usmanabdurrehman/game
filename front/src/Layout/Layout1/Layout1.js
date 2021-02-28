import React from "react";
import Container from "../../Components/Container/Container";
import Navbar from "../../Components/Navbar/Navbar";
import HeroWrapper from "../../Components/HeroWrapper/HeroWrapper";
import Footer1 from "../../Components/Footer1/Footer1";
import Footer2 from "../../Components/Footer2/Footer2";

import styles from './Layout1.module.css'

export default function Layout1({ children, noContainer }) {
	return (
		<>
			<Navbar />
			<div className={styles.content}>
				{!noContainer ? <Container>{children}</Container> : (children)}
			</div>
			<Footer1 />
			<Footer2 />
		</>
	);
}
