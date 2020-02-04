import React from 'react';

const Card = ({ username, email, id }) => {
	return (
		<div className='tc bg-light-blue dib br4 pa3 ma2 ba b--black bw2 grow shadow-5'>
			<img className='grow' alt='random robot' src={`https://robohash.org/${id}?set=set1&size=300x300`} />
			<div>
				<h2>{username}</h2>
				<p className='f4 lh-copy measure-narrow'>{email}</p>
			</div>
		</div>
	);
}

export default Card;