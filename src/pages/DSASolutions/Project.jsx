import React from 'react'
import "./Project.css"
import Template from '../../components/Project-Template/Template.jsx'

import About from "./assets/AboutScreen.png";
import Comment from "./assets/CommentSectionScreen.png";
import Home from "./assets/HomeScreen.png";
import PostQuestion from "./assets/PostQuestionScreen.png";
import PostSolution from "./assets/PostSolutionScreen.png";
import Profile from "./assets/ProfileScreen.png";
import Question from "./assets/QuestionScreen.png";
import Solution from "./assets/SolutionScreen.png";
import NotFound from "./assets/NotFoundScreen.png"

function Project() {
    return (
        <div>
            <Template 
                name="DSA Solutions"
                images={[Home,PostQuestion, PostSolution, Profile, Question, Solution, Comment, About, NotFound]}
                techUsed={["React", "Redux", "NodeJs", "ExpressJs", "MongoDB"]}
                visit="https://dsa-solutions.herokuapp.com/"
                src="https://github.com/wraith-0/DSASolutions"
            />
        </div>
    )
}

export default Project
