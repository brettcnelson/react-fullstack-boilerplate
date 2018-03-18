import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
	<div className="Nav">
		<div className="nav-link"><Link to='/'>Route To:  <code>/</code></Link></div>
		<div className="nav-link"><Link to='/list'>Route To: <code>/List</code></Link></div>
	</div>
)

export default Nav;
