import React from 'react'
import "./Home.css"
import codeBackground from "../../img/background.jpg"
import ProfileCard from "../profilecard/ProfileCard"
import TabsComponent from "../tabsComponent/TabsComponent"
import Projects from "../projects/Projects"
import AboutMe from "../aboutme/AboutMe"
import Skills from "../skills/Skills"

function Home() {
    return (
        <div className="home">
            <div>
                <div><img src={codeBackground} alt="backgroundimg" width="100%" height="500px" style={{ opacity: "0.9" }}></img></div>
                <ProfileCard />
            </div>
            <div>
                {/* <TabsComponent /> */}
                <AboutMe/>
                <Skills/>
                <Projects/>
            </div>
        </div>

    )
}

export default Home
