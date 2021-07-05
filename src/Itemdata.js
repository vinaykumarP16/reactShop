import React , {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

export default function Itemdata({match}) {

	const [item, setItem] = useState({});
	const [desc, setDesc] = useState(false);		

useEffect(() => {
	Item();
}, [])

const Item=async()=>{
	const fetchItem= await axios(`https://fakestoreapi.com/products/${match.params.id}`);
	setItem(fetchItem.data);	
}

const singleitem={
	display:"flex",
	justifyContent:"center",
	alignItems:'center',
	width:'500px',
	height:'550px',
	backgroundColor:'#d69c9c40',
	flexDirection:"column",
	marginTop:"20px",
	textAlign:"center",

}

const descrip=()=>{
	const desc=(item.description);
	setDesc(desc);
}


	return (
		<div className="Itemdata" style={singleitem} key={item.id}>
			<h1>{item.title}</h1>
			<img src={item.image} alt="product" width="200px" height="200px"/>
			<p>discount price: {Math.floor(item.price*8)}</p>
			<button onClick={descrip}>show desc</button>
			<p>{desc}</p>
		</div>
	)
}