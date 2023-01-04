// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image";
import Projects from "../components/projects";

// Step 2: Define your component
const IndexPage = () => {
  return (
      <Layout>
          <div style={{position: "relative", left: "8vw", width: "50vw", height: "150vh"}}>
              <h1 style={{fontSize: "7vw", color: "#D6FFF6", fontFamily: "Nexa-Regular", position: "relative", top: "28vh"}}>Brian Yao</h1>
              <h1 style={{color: "#D6FFF6", fontFamily: "Nexa-Regular", position: "relative", top: "25vh"}}>Computer Science Student at the University of Washington</h1>
              <p style={{color: "#e0e0e0", fontSize: "1.5vw", width: "50vw", fontFamily: "Nexa-Thin", position: "relative", top: "28vh"}}>I’m a student at the University of Washington studying computer science with a passion for anything robotics related!</p>
              <StaticImage src={"../images/img.png"} alt={"Picture of me!"} style={{
                  width: "20vw",
                  position: "relative",
                  float: "right",
                  top: "-10vh",
                  right: "-24vw"
              }}/>
          </div>

      </Layout>

  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage