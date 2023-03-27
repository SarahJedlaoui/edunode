import React, { Component } from 'react'

class Loggedout extends Component {
    constructor(props){
        super(props)
       
        this.state = {
            isLoggeOut: false
        }
    }

    componentDidMount(){
        localStorage.removeItem('token');
        
    }

    render() {
        return (
            <div>
                <p>You are now logged out</p>

            </div>
        )
    }
}

export default Loggedout;