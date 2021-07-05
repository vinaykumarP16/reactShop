import React , {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

export default function Shop() {

	const [state, setState] = useState([]);
	const [error,setError]=useState('');

useEffect(() => {
	fetchitem();
}, [])

const fetchitem=async()=>{
	try{
		const data=await fetch(`https://fakestoreapi.com/products`);
		const newdate=await data.json();
		setState(newdate);
	}catch(error){
		setError("unable to connect sorry");
	}
}


console.log(state);

const myitem={
	width:"350px",
	height:"380px",
	textDecoration:"none",
	backgroundColor:"#b2abb354",
	margin:"20px",
}

	return (
		<div className="items">
			{state.map(pro=>(
				<Link to={`/shop/${pro.id}`}>
				<div style={myitem}>
				<h4 key={pro.id} style={{'textDecoration':"none"}} >{pro.title}</h4>
				<img src={pro.image} alt={pro.id} width="200px" height="200px"/>
				<p>Actual Price:{Math.floor(pro.price*10)}</p>
				<p>discount:{`${Math.floor(pro.price*10-pro.price*8)}`}</p>
				<p>discount price: {Math.floor(pro.price*8)}</p>	
				</div>
				</Link>
				))}	
				<p>{error}</p>
		

		</div>
	)
}