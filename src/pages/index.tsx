// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
      <Layout>
          <div style={{position: "absolute", top: "28vh", left: "8vw"}}>
              <h1 style={{fontSize: "7vw", color: "#D6FFF6"}}>Brian Yao</h1>
              <h1 style={{color: "#D6FFF6"}}>Computer Science Student at the University of Washington</h1>
              <p style={{color: "#e0e0e0", fontSize: "1.5vw", width: "50vw"}}>I’m a student at the University of Washington studying computer science with a passion for anything robotics related!</p>
          </div>
          <StaticImage src={"../images/img.png"} alt={"Picture of me!"} style={{
    width: "20vw",
    position: "absolute",
    right: "17vw",
    top: "28vh"
}}/>
      </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage