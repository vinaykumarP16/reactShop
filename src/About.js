import React from 'react';
import './App.css';

export default function About() {
	return (
		<div className="About">
			<h1>hello this is <a href="https://vinaykumarp1695.netlify.app/">VINAY KUMAR P </a> </h1>
			<p>
				this is my first app with react routers.<br/>
				its built by using fake api of shop items.
			</p>
			<a href="https://www.linkedin.com/in/vinay-kumar-p-20766214b/" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
			<a href="https://github.com/vinaykumarP16" target="_blank"><i class="fab fa-github-square" aria-hidden="true"></i></a>
			<a href="mailto:vinaykumar.p1995v@gmail.com" ><i class="fas fa-envelope" aria-hidden="true"></i></a>

		</div>
	)
}