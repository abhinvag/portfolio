import React from 'react'
import Template from '../../components/Project-Template/Template'
import Meme from "./assets/meme.gif"
import Style1 from "./assets/Style1.png"


function CompileAbhi() {
    return (
        <div>
            <Template
                name="CompileAbhi"
                images={[Style1, Meme]}
                techUsed={["React", "HTML", "CSS", "Bootstrap"]}
                visit="https://compileabhi.netlify.app/"
                src="https://github.com/Abhishekkr3003/VMware-CompileAbhi"
            />
        </div>
    )
}

export default CompileAbhi
