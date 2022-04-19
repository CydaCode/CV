import React from "react";
import Photo2 from './Photo2.jpg'
import './Image.css'


const Image =()=> {
    return(
        <div className="profileset">
            <img style={{width: '150px'}} src={Photo2} alt='Profile Picture'/>
            <h1>Cynthia Nwankwo</h1>
            <p>Frontend Developer</p><br />
        </div>
    )
}

export default Image;