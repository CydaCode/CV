import React from "react";
import Bio from "../Bio/Bio";
import Education from "../Educattion/Education";
import WorkExperience from "../WorkExperience/WorkExperience";
import Skills from "../Skills/Skills";

const Profile =()=> {
    return(
        <div style={{fontSize: '1rem'}}>
            <Bio />
            <Education />
            <WorkExperience />
            <Skills />
        </div>
        
    )
}


export default Profile;