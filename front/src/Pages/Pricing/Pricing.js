import React,{useState} from 'react'
import Layout from '../../Layout/Layout1/Layout1'
import CardContainer from '../../Components/CardContainer/CardContainer'

export default function Pricing() {

	let data = [{
		id:1,
		price:39.99,
		services:['1 month free trial','100% money back guarantee']
	},{
		id:2,
		price:59.99,
		services:['1 month free trial','100% money back guarantee','5 Copies of the game']
	},{
		id:3,
		price:99.99,
		services:['1 month free trial','100% money back guarantee','10 Copies of the game']
	}]

	return (
		<Layout>
			<CardContainer cards={data}></CardContainer>
		</Layout>
	)
}