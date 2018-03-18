import React from 'react';

const List = () => {
	const nums = [1,2,3,4,5,6,7,8,9];
	return (
		<ul>
			{nums.map(num => <li>{num}</li>)}
		</ul>
	)
}

export default List;
