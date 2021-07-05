import React from 'react';
import Nav from './Nav.js';
import Shop from './shop.js';
import About from './About.js';
import Itemdata from './Itemdata.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';

export default function App() {

  return (
    <Router>
        <div>
            <Nav/>
             <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/shop/:id" component={Itemdata} />
             </Switch>
        </div>
    </Router>
  );
}


const Home=()=>{
  return(
    <div className="Home">
    <h1> this is the home page of the V!nayKart</h1>
    </div>
    )
};



