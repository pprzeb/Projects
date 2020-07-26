import React from 'react';


import { useDrop } from "react-dnd";



import MenuInitialItem from '../menu-initial-item/menuInitialItem.component'

import './languages-menu-initial.style.scss'

const MenuInitial = ({buttonStyle, langList, onClick, onDrop, mainLang}) => {
    let main = mainLang

    const [,drop] = useDrop({
        accept: 'box'
    })

    return (
        <div className='menu-initial'>
            <div className='column1'>
            <h2> Choose the languages you like to learn:</h2>
            </div>
            <div className='column2'>
                <div className="menu">
                    
                    <input type="checkbox"  className="menu-open" name="menu-open" id="menu-open"/>
                        <label className="menu-open-button" htmlFor="menu-open">
                        {/* <p>Click me:)</p> */}
                        <span className="lines line-1"></span>
                        <span className="lines line-2"></span>
                        <span className="lines line-3"></span>
                        </label>
                    
                    {langList.map(item=>
                        <MenuInitialItem key={item} name={item} buttonStyle={buttonStyle} onClick={onClick} onDrop={onDrop}/>)}
                        <button ref={drop} key={"mainid"} className={'menu-item mai'} name='main'><h4>Main Language:</h4> {main}</button>
                </div>
            </div>
            
        </div>
    )
}

export default MenuInitial