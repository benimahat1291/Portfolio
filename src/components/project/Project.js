import React from 'react'
import "./Project.css"
import WebIcon from "../../img/webpage_icon.png"
import GithubIcon from "../../img/git_icon.png"
import MealMatchersPic from "../../img/meal_matcher.png"

function Project() {


    const projectArr = [
        {
            name: "Meal Matchers",
            message: "MealMatchers a website application that uses Jquerry to search an Api for recipies when the user provides an ingredient. User can then save the recipi to their database",
            img: { MealMatchersPic },
            githubUrl: "https://github.com/benimahat1291/project_1-----MealMatcher.git",
            deployedUrl: "https://jessicaano92.github.io/meal_matcher_javascript_ajax/"
        },
        {
            name: "BookShelf",
            message: "BookShelf is a MVC web page application that uses node express and sequalize.This application allows uses to make an accout and search and borrow books from other users that have an accout on the page.",
            img: "http://www.getmdl.io/assets/demos/welcome_card.jpg",
            githubUrl: "https://github.com/benimahat1291/BookShelf-Public-Library-Online-Rental-System-Javascript-Express-MySQL-Sequelize.git",
            deployedUrl: "https://intense-earth-81966.herokuapp.com/"
        },
        {
            name: "Project-3 Placeholder",
            message: "This will be our final project in this BootCamp. Making a full MERN Application",
            img: "http://www.getmdl.io/assets/demos/welcome_card.jpg",
            githubUrl: "",
            deployedUrl: ""
        }
    ]




    return (
        <>
            {projectArr.map(e => (
                <div className="project">
                    <div className="project__img"><img src={MealMatchersPic} alt="Meal Matchers"></img></div>
                    <div className="project__info">
                        <h1>Meal Matchers</h1>
                        <div className="project_discription"><p>MealMatchers a website application that uses Jquerry to search an Api for recipies when the user provides an ingredient. User can then save the recipi to their database</p></div>
                    </div>
                    <div className="project__links">
                        <div><img className="project__link" src={GithubIcon} alt="github" href=""></img></div>
                        <div><img className="project__link" src={WebIcon} alt="Deployed Website" href=""></img></div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Project
