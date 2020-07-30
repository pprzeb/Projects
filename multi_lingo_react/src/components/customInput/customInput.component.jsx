import React from 'react';

import './customInput.style.scss'




const CustomInput = ({langName, labelColor, inputHandler}) => {

    
    
    return (
        <div>
            <span>
            <input id='first' className='basic-slide' type='text' onChange={inputHandler} placeholder="type some word here"/>
            <label htmlFor='first' className={labelColor}>{langName}</label>
            </span>
        </div>
    )
}

export default CustomInput