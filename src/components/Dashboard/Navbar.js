import { useState } from "react"
import "./navbar.css"
import Logout from '../auth/Logout';
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        EduNode
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/search">Search</a>
          </li>
          <li>
            <a href="/account">Account</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <a href="/feed">Feed</a>
          </li>
          <li>
            <a href="/certificate">Certificates</a>
          </li>
          <li>
            <a href="/post">New Post</a>
          </li>
          <li>
            <a href="/course">Add Course</a>
          </li>
          <li>
            <a href="/chat">Chat</a>
          </li>
          <li>
            <a href="/historyChat">Chat History</a>
          </li>
          <li>
            <button
              onClick={() => {
                window.location.href = "mailto:hi@edunode.org?subject=Reports";
              }}
            >

              Reports
            </button>
          </li>
          <Logout />
        </ul>
      </div>
     
    </nav>
  );
}