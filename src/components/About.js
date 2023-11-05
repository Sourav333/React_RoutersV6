import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function About() {
    const location = useLocation()
    console.log(location)
  return (
    <>
    <div>I am a About Page and my id is {location.state.Aboutid}</div>
    <Link to="/contact">Contact</Link>
    <br></br>
    <Link to="/">Home</Link>
    </>
  )
}

export default About