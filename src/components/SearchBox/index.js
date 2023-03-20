import React, { Component } from 'react';
import axios from 'axios';


const getResults = async (searchTerm) => {
    try {
      const response = await axios.get(`http://localhost:5001/api/search?q=${searchTerm}`);
      const data = JSON.parse(response.data);
const organizedData = {};
data.forEach(course => {
  if (!organizedData[course.level]) {
    organizedData[course.level] = [];
  }
  organizedData[course.level].push(course);
});
      // organize the data as per your requirement
      return data;
    } catch (error) {
      console.error(error);
    }
  };

class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchTerm: '',
        results: [],
        showResults: false,
      };
    }
  
    handleChange = (event) => {
      this.setState({ searchTerm: event.target.value });
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      // Call an API or function to get results based on searchTerm
      const results = getResults(this.state.searchTerm);
      this.setState({ results, showResults: true });
    }

    
      
  
    render() {
        
      const { searchTerm, results, showResults } = this.state;
  
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              value={searchTerm} 
              onChange={this.handleChange} 
              placeholder="Search..." 
            />
            <button type="submit">Search</button>
          </form>
          
        </div>
      );
    }
  }
  
  export default SearchBar;