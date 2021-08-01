import React from 'react'
import "../css/Projects.css"
import Project from '../components/Project'
import Admin from "../images/Online-shop/admin.png";
import AdminLogin from "../images/Online-shop/adminLogin.png";
import Cart from "../images/Online-shop/cart.png";
import HomePage from "../images/Online-shop/homepage.png";
import Login from "../images/Online-shop/login.png";
import Inventory from "../images/Online-shop/inventory.png";
import Bill from "../images/Online-shop/bill.png";

function Project2() {
    return (
        <div className="projects-div">
            <Project 
                name="Online Shop"
                images={[HomePage, Login, Cart, AdminLogin, Admin, Inventory, Bill]}
                techUsed={["React", "NodeJs", "ExpressJs", "MongoDB"]}
                visit="https://ecom-webapp.herokuapp.com/"
                src="https://github.com/wraith-0/ecom-webapp"
                demo="https://www.youtube.com/watch?v=uRsPq_KvCio&ab_channel=AbhinavAgarwal"
                last="true"
            />
        </div>
    )
}

export default Project2
