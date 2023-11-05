import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
    <div>I am a Contact Page</div>
    <Link to="/about">About</Link>
    <br></br>
    <Link to="/">Home</Link>
    </>
  )
}

export default Contact