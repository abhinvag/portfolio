import React from 'react'
import "../css/Projects.css"
import Project from '../components/Project'
import About from "../images/DSASolutions/AboutScreen.png";
import Comment from "../images/DSASolutions/CommentSectionScreen.png";
import Home from "../images/DSASolutions/HomeScreen.png";
import PostQuestion from "../images/DSASolutions/PostQuestionScreen.png";
import PostSolution from "../images/DSASolutions/PostSolutionScreen.png";
import Profile from "../images/DSASolutions/ProfileScreen.png";
import Question from "../images/DSASolutions/QuestionScreen.png";
import Solution from "../images/DSASolutions/SolutionScreen.png";

function Project1() {
    return (
        <div className="projects-div">
            <Project 
                name="DSA Solutions"
                images={[Home,PostQuestion, PostSolution, Profile, Question, Solution, Comment, About]}
                techUsed={["React", "Redux", "NodeJs", "ExpressJs", "MongoDB"]}
                visit="https://dsa-solutions.herokuapp.com/"
                src="https://github.com/wraith-0/DSASolutions"
                demo="https://www.youtube.com/watch?v=uRsPq_KvCio&ab_channel=AbhinavAgarwal"
                last="false"
            />
        </div>
    )
}

export default Project1
