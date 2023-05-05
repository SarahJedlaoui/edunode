import React, { Component } from 'react'
import NavBar from '../NavBar';
import Footer from '../Footer';

export default class Sep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "",
          
            response: '',
            
        }

       


    }

    componentDidMount() {
        fetch('https://edunode.herokuapp.com/.well-known/stellar.toml')
          .then(res => res.text())
          .then(data => {
            this.setState({ response: data });
          })
          .catch(error => {
            console.error(error);
          });
      }
    render() {
        
        
        return (
          <div>
            <NavBar />
<div>
<div>
<pre>{this.state.response}</pre>
    </div>
</div>
            <Footer />
          </div>
        );
    }
}
