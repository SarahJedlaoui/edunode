import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      results: []
    };
  }

  handleInputChange = event => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery }, () => {
      this.performSearch();
    });
  }

  performSearch = () => {
    const { searchQuery } = this.state;
    
    alert(searchQuery)
    // Perform search logic here and update results state
    // const results = mySearchFunction(searchQuery);
    // this.setState({ results });
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchQuery}
          onChange={this.handleInputChange}
        />
        {results.map(result => (
          <div key={result.id}>{result.title}</div>
        ))}
      </div>
    );
  }
}

export default SearchBar;
