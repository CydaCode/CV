import React from "react";

const WorkExperience =()=> {
    return(
        <div style={{lineHeight: '20px'}}>
            <h2 style={{paddingLeft: '2rem', paddingRight: '2rem'}}>EXPERIENCE</h2>
            <div style={{paddingLeft: '2rem', paddingRight: '2rem'}}>
                <h3>React Developer</h3>
                <p style={{fontWeight: 'bold'}}>Side Hustle</p>
                    <div style={{display: 'flex', marginTop:'-2rem'}}>
                    <p >2022- till date</p>
                    </div>
                <ul>
                    <li>Undegoing training on Web Development with React</li>
                </ul>
            </div> <br />
            <div style={{paddingLeft: '2rem', paddingRight: '2rem'}}>
                <h3>Frontend Developer intern</h3>
                <p style={{fontWeight: 'bold'}}>TechieCognito</p>
                <div style={{display: 'flex', marginTop:'-2rem'}}>
                        <img />
                        <p>2021-2022</p>
                </div>
                <ul style={{ marginTop:'-0.7rem', lineHeight: '20px'}}>
                    <li>Collaborated with teammates and updated application using Git</li>
                    <li>Performed daily tasks</li>
                    <li>Worked on Responsiveness and Layout of applications </li>
                </ul>
            </div> <br />
            <div className="design"></div>
        </div>
    )
}

export default WorkExperience;