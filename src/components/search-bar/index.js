import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

class SearchBar extends Component {

  constructor() {
    super();
    this.state = {
      searchKeyword: "",
    }
  }

  onChangeInput = e => {
    const { searchKeyword } = this.state;
    const newKey = e.target.value;
    this.setState({ searchKeyword: e.target.value });
  }

  onBlurInput = (e) => this.props.fetchRepos(e.target.value);

  render() {
    const { searchKeyword } = this.state;
    return <div>
      <h1> Search Github Repos </h1>
        <InputGroup size="lg">
          <FormControl
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={this.onChangeInput}
            onBlur={this.onBlurInput}
            value={searchKeyword}
          />
        </InputGroup>
    </div>
  }
};

export default SearchBar;
