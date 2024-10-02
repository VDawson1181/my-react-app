import React from 'react'
import DigitalClockApp from "../components/DigitalClock/DigitalClockApp.jsx"

const Home = () => {
  return (
    <>
        <h2>Homepage</h2>
        <DigitalClockApp type={1}></DigitalClockApp>
        <DigitalClockApp type={2}></DigitalClockApp>
    </>
  )
}

export default Home