import React, { Component } from 'react';
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import axios from 'axios';

class SearchResultsPage extends Component {
constructor(props) {
super(props);
this.state = {
searchTerm: new URLSearchParams(props.location.search).get('query'),
courses: []
}

}
async componentDidMount() {
    try {
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Content-Type": "application/json"
        }
        const {data} = await axios.get(`http://localhost:5001/api/search?q=${this.state.searchTerm}`, {headers});
        this.setState({ courses: data });
    } catch (error) {
        console.log(error)
    }
}

render() {
    return (
        <div>
            <h1>Search Results</h1>
            <p>Results for: {this.state.searchTerm}</p>
            <ul>
                {this.state.courses.map(course => (
                    <li key={course.id}>
                        <a href={`/courses/${course.id}`}>{course.name}</a>
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
  
  export default withRouter(
    connect(mapStateToProps, null)(SearchResultsPage),
  );
  