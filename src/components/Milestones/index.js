import React, { Component } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import "./style.css";
import scf from "./scfwinner.png";
import u from "./users.png";
import ws from "./workshop.png";

class Milestones extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="aboutus">
          <h1>Milestones</h1>
          <h5>Milestone 1</h5>
          <p>March 2020 - EduNode was released</p>

          <br></br>
          <h5>Milestone 2</h5>
          <p>October 2020 - Winners of the Stellar Community Fund #6</p>
          <br></br>
          <h5>Milestone 3</h5>
          <p>
            October 2020 - Finalist of the Educational Content challenge - Kelp
            StellarBattle
          </p>
          <br></br>
          <h5>Milestone 4</h5>

          <p>February 2021 - Release First EduNode Stellar Course</p>

          <br></br>
          <h5>Milestone 5</h5>
          <p>
            July 2021 - 2K+ of users have used our platform and learned something
            new during the last year.
          </p>

          <br></br>
          <h5>Milestone 6</h5>
          <p>
            September 2021 - People from over 100 countries have already engaged
            with us.
          </p>

          <div>
            <img src={u} className="users" />
          </div>

          <br></br>
          <h5>Milestone 7</h5>
          <p>
            October 2021 - More than 500 passionate people about EduNode follow
            us on social media.
          </p>
          <br></br>
          <h5>Milestone 8</h5>
          <p>
            Q3 2021 - Partnership with WIFI - With more than 3,000 courses,
            seminars, and training courses, WIFI Vienna is the largest provider
            of vocational training and further education.
          </p>
          <br></br>
          <h5>Milestone 9</h5>
          <p>Q4 2022 - New Dashboard UI and Customer Support Chat</p>

          <br></br>
          <h5>Milestone 10</h5>
          <p>
            May 2022 - Blockchain Workshop sponsored by Talent Garden Austria,
            Stellar Global, and Litemint.
          </p>
          <div>
            <img src={ws} className="ws" />
          </div>
          <br></br>
          <h5>Milestone 11</h5>
          <p>Winners of the Stellar Community Fund (SCF) #10 </p>

          <div>
            <a href="https://communityfund.stellar.org/">
              <img src={scf} className="img" />
            </a>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        
      </>
    );
  }
}

export default Milestones;