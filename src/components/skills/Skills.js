import React from 'react'
import './Skills.css'
import HtmlIcon from "../../img/html_icon.png"
import CssIcon from "../../img/css_icon.png"
import JsIcon from "../../img/js_icon.png"
import BootstrapIcon from "../../img/bootstrap_icon.png"
import MateralizeIcon from "../../img/materalize_icon.png"
import ReactIcon from "../../img/react_icon.png"
import JqIcon from "../../img/jq_icon.png"
import NodeIcon from "../../img/node_icon.png"
import ExpressIcon from "../../img/express_icon.png"
import SqlIcon from "../../img/sql_icon.png";
import MongoIcon from "../../img/mongodb_icon.png"
import FirebaseIcon from "../../img/firebase_icon.png"

function Skills() {
    return (
        <div className="skills">
            <div className="skills__title"><h2>Front End</h2></div>
            <div className="skills__icons">
                <div className="skill_icon"><img src={HtmlIcon} alt="html" /></div>
                <div className="skill_icon"><img src={CssIcon} alt="css" /></div>
                <div className="skill_icon"><img src={JsIcon} alt="js" /></div>
                <div className="skill_icon"><img src={ReactIcon} alt="React" /></div>
                <div className="skill_icon"><img src={JqIcon} alt="jq" /></div>
                <div className="skill_icon"><img src={BootstrapIcon} alt="bootstrap" /></div>
                <div className="skill_icon"><img src={MateralizeIcon} alt="js" /></div>
            </div>
            <div className="skills__title"><h2>Back End</h2></div>
            <div className="skills__icons">
                <div className="skill_icon"><img src={NodeIcon} alt="Node" /></div>
                <div className="skill_icon"><img src={ExpressIcon} alt="Express" /></div>
                <div className="skill_icon"><img src={MongoIcon} alt="MongoDB" /></div>
                <div className="skill_icon"><img src={FirebaseIcon} alt="FireBase" /></div>
                <div className="skill_icon"><img src={SqlIcon} alt="Sql" /></div>
            </div>


        </div>
    )
}

export default Skills
