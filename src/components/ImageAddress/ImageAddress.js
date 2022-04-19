import React from 'react';
import Image from "../Image/Image";
import './ImageAddress.css'
import Address from '../Address/Address';


const ImageAddress =()=> {
    return(
        <div className='imagestyle container'>
            <Image />
            <Address />
        </div>
    )
}

export default ImageAddress;