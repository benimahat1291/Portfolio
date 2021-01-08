import React from 'react'
import "./Contact.css"

function contact() {
    return (
        <div className="contact">
            <div className="contact__title"><h2>Contact Me</h2></div>
            <div class="contact__from">
                <from>
                    <div className="contact__userInfo">
                        <div className="contact__userInput"><input placeholder="Enter your name" className="form-control"></input></div>
                        <div className="contact__userInput"><input placeholder="Enter your email" className="form-control"></input></div>
                    </div>
                    <div className="contact__message"><textarea placeholder="Your message here..." className="form-control"></textarea></div>
                </from>
            </div>
        </div>
    )
}

export default contact
