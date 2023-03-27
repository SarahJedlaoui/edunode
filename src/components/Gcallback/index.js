import React, { Component } from 'react'
import { verifyGoogleUser } from "../../actions/authActions";

export default class Gcallback extends Component {
    // componentDidMount() {
        // setTimeout(() => {

// this.props.verifyGoogleUser()
        //   }, 3000)
        //   this.props.history.push("/dashboard")
    // }

    render() {
  console.log(this)
        return (
            <div>
                wait a moment, you will be redirected
            </div>
        )
    }
}
