import React from 'react'
import "./Home.css"
import codeBackground from "../../img/background.jpg"
import ProfileCard from "../profilecard/ProfileCard"

function Home() {
    return (
        <div className="Home">
             <div><img src={codeBackground} alt="backgroundimg" width="100%" height="500px"></img></div>
            <ProfileCard/>
        </div>
    )
}

export default Home
