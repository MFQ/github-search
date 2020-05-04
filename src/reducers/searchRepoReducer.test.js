import reducer from "./searchRepoReducer";

describe('Search RepoReducer', () => {
  it('should return default state', () => {
    expect(reducer(undefined, { type: 'default'})).toEqual({
      repos: [],
      fetching: false,
      fetched: false,
      error: null
    })
  });


  it('should return default ', () => {
    expect(reducer(undefined, { type: 'SEARCH_REPO_BEGAIN'})).toEqual({
      repos: [],
      fetching: true,
      fetched: false,
      error: null
    })
  });

  it('should return default ', () => {
    expect(reducer(undefined, {
      type: 'SEARCH_REPO_FULLFILLED', payload: {
        repos: [1,2,3],
      }
    })).toEqual({
      repos: [1,2,3],
      fetching: false,
      fetched: false,
      error: null,
    })
  });

  it('should return default ', () => {
    expect(reducer(undefined, {
      type: 'SEARCH_REPO_REJECT', payload: {
        error: [1,2,3],
      }
    })).toEqual({
      error: [1,2,3],
      fetching: false,
      fetched: false,
      repos: [],
    })
  });
});
