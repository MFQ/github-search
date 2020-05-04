import axios from 'axios';
import { searchRepoUrl } from '../utils/api';

export function searchRepo(query) {
  return (dispatch) => {
    dispatch( { type: 'SEARCH_REPO_BEGAIN' } )
    axios.get( searchRepoUrl(query) )
    .then((res) => dispatch( { type: 'SEARCH_REPO_FULLFILLED', payload: {
      repos: res.data ? res.data.items : []
    } } ) )
    .catch( (err) => dispatch ({ type: 'SEARCH_REPO_REJECT', payload: { error: err } }) );
  }
}
