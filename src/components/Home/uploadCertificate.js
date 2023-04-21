import React, { Component } from 'react';
import "./style.css"

class UploadCertificate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    };
  }

  handleChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('You selected: ' + this.state.selectedOption);
  }

  render() {
    return (
      <div className="App">
        <div className="cert">
          <h1>EdTech App</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="option">
              <input
                id="students"
                type="radio"
                value="Students"
                checked={this.state.selectedOption === "Students"}
                onChange={this.handleChange}
              />
              <label htmlFor="students">Students</label>
            </div>
            <div className="option">
              <input
                id="teacher"
                type="radio"
                value="Teacher"
                checked={this.state.selectedOption === "Teacher"}
                onChange={this.handleChange}
              />
              <label htmlFor="teacher">Teacher</label>
            </div>
            <div className="option">
              <input
                id="blockchain"
                type="radio"
                value="Upload your own certificates on the blockchain"
                checked={this.state.selectedOption === "Upload your own certificates on the blockchain"}
                onChange={this.handleChange}
              />
              <label htmlFor="blockchain">Upload your own certificates on the blockchain</label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UploadCertificate;
