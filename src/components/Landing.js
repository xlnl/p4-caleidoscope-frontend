import React from "react"
import {
    Button,
  } from '@chakra-ui/core';

// CSS imports
// import "../css/Landing.css"

// landing page for more info about Caleidoscope
const Landing = () => {
    return (
        <div>
            <h5>Welcome to</h5>
            <h2>Caleidoscope</h2>
            <p>— where you can see exactly what you need to do to seize any day.</p>
            <Button href="/join">Sign Up</Button>
        </div>
    )
};

export default Landing