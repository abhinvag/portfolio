import React from 'react'
import Template from '../../components/Project-Template/Template'
import thumbnail from "./assets/thumbnail.png"

function Project() {
    return (
        <div>
             <Template 
                name="CoReS"
                images={[thumbnail]}
                techUsed={["NodeJs", "ExpressJs", "PostgreSQL", "REST API"]}
                visit="https://course-registration-lnmiit.herokuapp.com/"
                src="https://github.com/wraith-0/course-registration-backend"
            />
        </div>
    )
}

export default Project
