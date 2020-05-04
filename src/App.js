import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/search-bar";
import SearchResults from "./components/search-results";

import { connect } from "react-redux";
import { searchRepo } from "./actions/githubSearchRepo"

const mapStateToProps = (store) => ({
    repos: store.searchRepoReducer.repos,
    fetching: store.searchRepoReducer.fetching,
    fetched: store.searchRepoReducer.fetched,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRepos: (keyword) => dispatch(searchRepo(keyword)),
});

class App extends Component{

  render() {
    const { repos, fetching } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar {...this.props}/>
        </header>
        { fetching && "loading..." }
        <SearchResults repos={repos}/>
      </div>
    );
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App)
