import React, { Component } from 'react';

class LoggedOut extends Component {
    constructor(props){
        super(props);
       
        this.state = {
            isLoggedOut: false
        };
    }

    componentDidMount(){
        localStorage.removeItem('token');
        this.setState({ isLoggedOut: true });
    }

    render() {
        return (
            <div>
                <p>You are now logged out</p>
            </div>
        );
    }
}

export default LoggedOut;