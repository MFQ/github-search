import React from 'react';

const SearchResults = ({repos}) => (<ul>
	{repos.map(repo => <li> {repo.name} </li>)}
</ul>
)

export default SearchResults;
