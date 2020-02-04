import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

	return(
		<div className='pl6 pr6'>
				<div className='pa3 flex flex-wrap justify-center align-center'>
					{ 
					robots.map((user, i) => {
						return ( 
							<Card 
								key={i} 
								id={robots[i].id} 
								name={robots[i].name} 
								username={robots[i].username} 
								email={robots[i].email}
			    			/>
						);
					})
					 }
				</div>
		</div>
	);
}

export default CardList;