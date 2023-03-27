import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem("token")
    const { history } = this.props
    let loggedIn = true
    if(token == null) {
      loggedIn = false
    }

    this.state = {
      loggedIn
    }
     
  }


  render() {
    if(this.state.loggedIn === false) {
      return <div>Please log in to view this page.</div>;
    }

    return (
      <div>
        <h3>Welcome</h3>
        <Link to="/logOut">Logout</Link>
      </div>
    )
  }
}

