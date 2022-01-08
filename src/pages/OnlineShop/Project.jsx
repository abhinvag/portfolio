import React from 'react'
import Template from '../../components/Project-Template/Template'
import Admin from "./assets/admin.png";
import AdminLogin from "./assets/adminLogin.png";
import Cart from "./assets/cart.png";
import HomePage from "./assets/homepage.png";
import Login from "./assets/login.png";
import Inventory from "./assets/inventory.png";
import Bill from "./assets/bill.png";

function Project() {
    return (
        <div>
            <Template 
                name="Online Shop"
                images={[HomePage, Login, Cart, AdminLogin, Admin, Inventory, Bill]}
                techUsed={["React", "NodeJs", "ExpressJs", "MongoDB"]}
                visit="https://ecom-webapp.herokuapp.com/"
                src="https://github.com/wraith-0/ecom-webapp"
            />
        </div>
    )
}

export default Project
