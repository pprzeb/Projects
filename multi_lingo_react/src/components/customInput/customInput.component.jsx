import React from 'react';

import './customInput.style.scss';

const CustomInput = ({langName, active, inputHandler}) => {

    const className = `input skinny ${active}`
    
    return (
        <div>
            <span>
            <input id='first' className={className} type='text' onChange={inputHandler} placeholder="type some word here"/>
            <label htmlFor='first' className='label'>{langName}</label>
            </span>
        </div>
    )
}

export default CustomInput