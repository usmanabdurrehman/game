import React,{useState} from 'react'
import './Forms.css'
import {TextField,Button} from '@material-ui/core'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

export default function Signin(props) {

	let [fields,setFields] = useState({
		email:'',
		pwd:''
	})

	let [redirect,setRedirect] = useState(false)

	// if(props.location.state){
	// 	
	// }

	let clickHandler = () => {
		axios({
			method:'post',
			url:'/signin',
			withCredentials:true,
			data:fields
		})
		.then(res=>{
			let {token,auth,user} = res.data
			if(auth==true){
				console.log(token)
				localStorage.setItem('token',JSON.stringify(token))
				setRedirect(true)
			}
		})
	}

	return (
		<div className='form-wrapper'>
			<div className='form left-form'>
				<div className='form-fields'>
					<div>
						<h1>Sign In</h1>
						<TextField onChange={e=>setFields({...fields,email:e.target.value})} label='Email' className='form-input' fullWidth/>
						<TextField onChange={e=>setFields({...fields,pwd:e.target.value})} type='password' label='Password' className='form-input' fullWidth/>
						<Button onClick={clickHandler} className='form-button'>Sign In</Button>
					</div>
				</div>
				<div className='form-image'>
					<img src='signin.jpg'/>
				</div>
			</div>
			{(redirect)?(<Redirect to='/'/>):null}
		</div>
	)
}