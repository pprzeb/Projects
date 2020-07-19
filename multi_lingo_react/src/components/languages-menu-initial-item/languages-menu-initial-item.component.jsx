import React from 'react';

import './languages-menu-initial-item.component.scss';


const MenuItem = (props) => {
    
    return (
        <div className='menuitem'>
            
            <p>
                {props.langName}
            </p>
        </div>
    )
}

export default MenuItem;