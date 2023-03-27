import React from "react";

import { Divider, Avatar, Grid, Paper } from "@mui/material";

import "./styles.css";

const imgLink =
  "https://edunode.org/static/media/me.5e5ff82d.jpg";

export default function Posts() {
  return (
    <div style={{ padding: 14 }} className="App">
      <h1>Posts</h1>
      <Paper style={{ padding: "40px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            {/* <Avatar alt="Remy Sharp" src={imgLink} /> */}
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}></h4>
            <p style={{ textAlign: "left" }}>
              This is my first post.{" "}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted ${} ago
            </p>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
        
      </Paper>

    </div>
  );
}
