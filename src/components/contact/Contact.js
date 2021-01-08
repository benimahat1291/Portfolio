import React from 'react'
import "./Contact.css"

function contact() {
    return (
        <div className="contact">
            <div className="contact__title"><h2>Contact Me</h2></div>
            <div className="contact__form">
                <form>
                    <div className="contact__userInfo">
                        <div className="contact__userInput"><input placeholder="Enter your name" className="form-control"></input></div>
                        <div className="contact__userInput"><input placeholder="Enter your email" className="form-control"></input></div>
                    </div>
                    <div className="contact__message"><textarea placeholder="Your message here..." className="form-control"></textarea></div>
                </form>
            </div>
        </div>
    )
}

export default contact
