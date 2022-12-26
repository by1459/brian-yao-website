// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () => {
    return (
        <Layout pageTitle={"About Me"}>
            <p>My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane,
                Albuquerque, New Mexico, 87104. To all law enforcement entities, this is not an admission of guilt. I am
                speaking to my family now. Skyler, you are the love of my life. I hope you know that. Walter Jr., you're
                my big man. There are going to be some things that you'll come to learn about me in the next few days. But
                just know that no matter how it may look, I only had you in my heart. Goodbye.
            </p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage