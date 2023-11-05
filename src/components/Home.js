import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const id=5;

    const navigateAbout =useNavigate()
    const navigateContact =useNavigate()

    function goToAbout(){
        navigateAbout("/about", {state : {Aboutid : id}})
    }
    function goToContact(){
        navigateContact("/contact")
    }
  return (
    <>
    <div>I am the Home Page</div>

    {/* Routing using link */}

    {/* <Link to="/about">About</Link>
    <br></br>
    <Link to="/contact">Contact</Link> */}

     {/* Routing with button */}

    <button onClick={goToAbout}>About</button>
    <br></br>
    <button onClick={goToContact}>Contact</button>
    </>
  )
}

export default Home