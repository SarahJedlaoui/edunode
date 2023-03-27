import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import { createBrowserHistory } from 'history';

class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: new URLSearchParams(props.location.search).get('query'),
      courses: []
    };
    this.history = createBrowserHistory();
  }

  async componentDidMount() {
    try {
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json"
      };
      const {data} = await axios.get(`http://localhost:5001/api/search?q=${this.state.searchTerm}`, {headers});
      this.setState({ courses: data });
    } catch (error) {
      console.log(error);
    }
  }

  handleCourseClick(courseId) {
    this.history.push(`/courses/${courseId}`);
  }

  render() {
    return (
      <div>
        <h1>Search Results</h1>
        <p>Results for: {this.state.searchTerm}</p>
        <ul>
          {this.state.courses.map(course => (
            <li key={course.id}>
              <a onClick={() => this.handleCourseClick(course.id)}>{course.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(SearchResultsPage);
