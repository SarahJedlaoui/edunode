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
  
    fetch(`http://localhost:5001/api/search?query=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ results: data.results });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { results, searchQuery } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={this.handleInputChange}
        />
        <button onClick={this.performSearch}>Search</button>
        {results.map(result => (
          <div key={result.id}>{result.title}</div>
        ))}
      </div>
    );
  }
}

export default SearchBar;
