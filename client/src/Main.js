import React from 'react';
import Grid from './Grid';
import List from './List';
import { Switch,Route } from 'react-router-dom';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Grid}/>
			<Route path='/list' component={List}/>
		</Switch>
	</main>
)

export default Main;
