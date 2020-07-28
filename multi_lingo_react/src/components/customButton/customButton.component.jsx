import React from 'react';

import './customButton.style.scss'

const CustomButton = () => {
    let name = 'hello'
    return (
        <button className='button $green:true'>{name}</button>
    )
}


export default CustomButton