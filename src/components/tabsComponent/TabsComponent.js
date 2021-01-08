import React, {useState} from 'react'
import "./TabsComponent.css"
import {Tabs, Tab} from "react-mdl"
import AboutMe from "../aboutme/AboutMe"
import Skills from "../skills/Skills"
import Contact from "../contact/Contact"

function TabsComponent() {

    const [activeTab, setActiveTab] = useState(0);

    const toggleTabs = () => {
        if(activeTab === 0){
            return(<div><AboutMe/></div>)
        } else if(activeTab === 1) {
            return(<div><Skills/></div>)
        } else if(activeTab ===2){
            return(<div><Contact/></div>)
        }

    }

    return (
        <div className="tabs">
            <Tabs activeTab={activeTab} onChange={(tabId => setActiveTab(tabId))}>
                <Tab className="tab bg-danger">About Me</Tab>
                <Tab className="tab bg-primary">Skills</Tab>
                <Tab className="tab bg-success">Contact Me</Tab>
            </Tabs>

            <section className="tab__component">
                {toggleTabs()}
            </section>

        </div>
    )
}

export default TabsComponent;
