export default function reducer(state={
    repos: [],
    fetching: false,
    fetched: false,
    error: null
  }, action) {
  switch (action.type) {
    case "SEARCH_REPO_BEGAIN":
      return {
        ...state,
        fetching: true
      }
    case "SEARCH_REPO_FULLFILLED":
      return {
        ...state,
        fetching: false,
        fetched: false,
        repos: action.payload.repos,
      }
    case "SEARCH_REPO_REJECT":
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload.error };

    default:
  }

  return state;
}
