import React from 'react'
import "./ProfileCard.css"
import ProfilePic from "../../img/mypic.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from "../../img/Mahat_resume.pdf"




function ProfileCard() {
    return (
        <div className="container">
            <div className="profile__card">
                <div className=" card__body">
                    <div className="profilepic">
                        <img src={ProfilePic} alt="profilepic" />
                    </div>
                    <div className="card__info">
                        <p className="nameTxt">BENI MAHAT</p>
                        <p className="text-muted titleTxt">Full Stacks Web Developer</p>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className="text-muted">Age</td>
                                    <td>:</td>
                                    <td>25</td>
                                </tr>
                                <tr>
                                    <td className="text-muted">Location</td>
                                    <td>:</td>
                                    <td>Boulder, Colorado</td>
                                </tr>
                                <tr>
                                    <td className="text-muted">Email</td>
                                    <td>:</td>
                                    <td>beni.mahat@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="profile__links">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/mahatbeni"><i className="fa fa-facebook fa-2x profile__icon"></i></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/benimahat1291"><i className="fa fa-github fa-2x profile__icon"></i></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/beni-mahat-1218b5184/"><i className="fa fa-linkedin fa-2x profile__icon"></i></a>
                    <a rel="noopener noreferrer" target="_blank" href={Resume}><i className="fa fa-file fa-2x profile__icon"></i></a>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
