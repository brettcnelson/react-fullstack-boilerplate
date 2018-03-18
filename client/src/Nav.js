import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
	<div className="Nav">
		<div className="nav-link"><Link to='/'><code>root</code></Link></div>
		<div className="nav-link"><Link to='/list'><code>/list</code></Link></div>
	</div>
)

export default Nav;
