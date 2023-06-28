import React, { Component } from 'react'
import NavBar from '../Dashboard/Navbar1';
import Footer from '../Footer/Footer';
export default class AiPlugin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "",
          
            response: '',
            
        }

       


    }

    componentDidMount() {
        fetch('https://edunode.herokuapp.com/.well-known/ai-plugin.json')
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
            <br></br>
<div>
<div>
<pre>{this.state.response}</pre>
    </div>
</div>
<Footer></Footer>
          </div>
        );
    }
}
