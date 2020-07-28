import React from 'react';

import './main-component.style.scss'

const MainComponent = (props) => {
    
    

    return (
        <div className='mainComponent'>
            {props.children}
        </div>

    )
}

export default MainComponent