import * as React from 'react'
import {StaticImage} from "gatsby-plugin-image";

interface SingleProjectProps {
    description: string;
    link: string;
}

const SingleProject = (props: SingleProjectProps) => {
    const { description, link } = props;
    return (
        <div>
            <StaticImage src={"../images/HCRL.png"} alt={"HCRL"}></StaticImage>
            <p style={{fontFamily: "Nexa-Heavy", color: "#D6FFF6", fontSize: "5vh", display:"block"}}>Hello!!!</p>
        </div>
    )
}

export default SingleProject;