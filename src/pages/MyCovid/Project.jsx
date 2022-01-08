import React from 'react'
import Template from '../../components/Project-Template/Template'
import img404 from "./assets/404.png"
import sidebar from "./assets/sidebar.png"
import home from "./assets/home.png"
import list from "./assets/list.png"
import info from "./assets/info.png"
import login from "./assets/login.png"
import otp from "./assets/otp.png"
import registration from "./assets/registration.png"
import Update from "./assets/Update.png"

function Project() {
    return (
        <div>
            <Template 
                name="My Covid"
                images={[login, otp, home, sidebar, list, info, registration, Update, img404]}
                techUsed={["React", "CSS", "Bootstarp"]}
                visit="https://my-covid-hospital-app.herokuapp.com/"
                src="https://github.com/mycovid/hospital-web-app"
            />
        </div>
    )
}

export default Project
