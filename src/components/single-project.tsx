import * as React from 'react'


interface SingleProjectProps {
    image: string;
    description: string;
    link: string;
}

const SingleProject = (props: SingleProjectProps) => {
    const { image, description, link } = props;
    return (
        <div>
            <p style={{fontFamily: "Nexa-Heavy", color: "#D6FFF6", fontSize: "5vh", display:"block"}}>Hello!!!</p>
        </div>
    )
}

export default SingleProject;