import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
			<form className='flex justify-center'>  
				<h2>Search: </h2>
				<input
					className='ml3 pa3 ba b--black br4 bg-lightest-grey f3 mb3'
					type='search'
					placeholder='enter robots name'
					tabindex='1'
					onChange={ searchChange }
				/>
			</form>
	);
}

export default SearchBox;