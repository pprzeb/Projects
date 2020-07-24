import React from 'react';

import './languages-menu-initial.component.scss'


const MenuInitial = (props) => {
    
    return (
        <div className='menu-initial'>
            <h2> Choose the languages you like to learn:</h2>
            <div className="menu">
                <input type="checkbox"  className="menu-open" name="menu-open" id="menu-open"/>
                    <label className="menu-open-button" htmlFor="menu-open">
                    {/* <p>Click me:)</p> */}
                      <span className="lines line-1"></span>
                      <span className="lines line-2"></span>
                      <span className="lines line-3"></span>
                    </label>
                {props.langList.map(item=>
                <button key={item+"id"} className={props.buttonStyle.get(item)[1]} name={item} onClick={props.onClick}>{item}</button>)
                }
            </div>
            
        </div>
    )
}

export default MenuInitial