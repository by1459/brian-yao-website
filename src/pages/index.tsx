// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const IndexPage = () => {
  return (
      <main>
        <h1>Welcome to my website!</h1>
        <Link to="/about">About Me</Link>
        <p>I'm Walter White</p>
      </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage