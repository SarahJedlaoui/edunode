import React, { useEffect, useState } from "react";
import axios from "axios";
import "./blogPage.css";
import NavBar from "../NavBar";

function BlogPage() {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the blog data when the component mounts
    const fetchBlogData = async () => {
      try {
        // Replace 'your_backend_url' with the actual URL of your backend server
        const response = await axios.get("http://localhost:5001/api/blogDy/64b7e92cc936ac1ec16dbddc");
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
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
      </div>
    </>
  );
}

export default BlogPage;
