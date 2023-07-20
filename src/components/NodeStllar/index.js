import React, { useEffect, useState } from "react";
import axios from "axios";
import "./blogPage.css";
import NavBar from "../NavBar";
import node from './node.png'
function BlogPage() {
  const [blog, setBlog] = useState(null);
  const [nodes, setNodes] = useState([]);
  useEffect(() => {
    // Fetch the blog data when the component mounts
    const fetchBlogData = async () => {
      try {
        // Replace 'your_backend_url' with the actual URL of your backend server
        const response = await axios.get("https://edunode.herokuapp.com/api/blogDy/64b7e92cc936ac1ec16dbddc");
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    // Fetch the node data when the component mounts
    const fetchNodeData = async () => {
      try {
        // Replace 'your_backend_url' with the actual URL of your backend server
        const response = await axios.get(
          "https://api.stellarbeat.io/v1/node"
        );
        setNodes(response.data); // Assuming the response is an array of node objects
      } catch (error) {
        console.error("Error fetching node data:", error);
      }
    };
    fetchBlogData();
    fetchNodeData();
  }, []);

  if (!blog) {
    // Render a loading state or return null while the blog data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <br></br>
      <div className="blog-content">

        <div align="center">
          <img src={node} width="400" height="150" />
        </div>
        <br></br>
        <h1 className="blog-title">{blog.title}</h1>
        {blog.subtitles.map((subtitle, index) => (
          <div key={index} className="blog-section">
            <h2 className="blog-subtitle">{subtitle}</h2>
            <p className="blog-subtitle-text">{blog.subtitleTexts[index]}</p>
            {blog.subtitleTextItems.map((item, itemIndex) => {
              if (item.subtitle === subtitle) {
                return (
                  <p key={itemIndex} className="blog-subtitle-item">
                    {item.text}
                  </p>
                );
              }
              return null;
            })}
          </div>
        ))}


        <h2 className="blog-conclusion-title">{blog.subtitle4}</h2>
        <p className="blog-conclusion-text">{blog.conclusion}</p>
        <div className="row justify-content-center card-deck d-flex">
          {nodes.slice(0, 20).map((node) => (
            <div className="col-md-4 mb-4 h-100" key={node.publicKey}>
              <div className="card shadow h-100">
                <div className="card-body">
                  <h6 className="card-title" style={{ fontSize: '24px' }}>Node</h6>
                  {/* Other node details */}
                  <label style={{ fontSize: '20px' }}>Public Key:</label>
                  <p className="card-text">{node.publicKey}</p>
                  <label style={{ fontSize: '20px' }}>Name:</label>
                  <h5 className="card-title">{node.name}</h5>
                  <label style={{ fontSize: '20px' }}>Host:</label>
                  <p className="card-text">{node.host}</p>
                  <label style={{ fontSize: '20px' }}>ISP:</label>
                  <p className="card-text">{node.isp}</p>

                  {/* Extract latitude and longitude from geoData */}
                  <label style={{ fontSize: '20px' }}>Latitude:</label>
                  <p className="card-text">{node.geoData.latitude}</p>
                  <label style={{ fontSize: '20px' }}>Longitude:</label>
                  <p className="card-text">{node.geoData.longitude}</p>

                  <label style={{ fontSize: '20px' }}>Active:</label>
                  <p className="card-text">{node.active.toString()}</p>
                  <label style={{ fontSize: '20px' }}>Is Full Validator:</label>
                  <p className="card-text">{node.isFullValidator.toString()}</p>
                  <label style={{ fontSize: '20px' }}>Is Validating:</label>
                  <p className="card-text">{node.isValidating.toString()}</p>
                  <label style={{ fontSize: '20px' }}>Is Validator:</label>
                  <p className="card-text">{node.isValidator.toString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>



    </>
  );
}

export default BlogPage;
