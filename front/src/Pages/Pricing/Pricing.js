import React,{useState} from 'react'
import Layout from '../../Layout/Layout1/Layout1'
import CardContainer from '../../Components/CardContainer/CardContainer'

export default function Pricing() {

	let data = [{
		id:1,
		price:39.99
	},{
		id:2,
		price:59.99
	},{
		id:3,
		price:99.99
	}]

	return (
		<Layout>
			<CardContainer cards={data}></CardContainer>
		</Layout>
	)
}