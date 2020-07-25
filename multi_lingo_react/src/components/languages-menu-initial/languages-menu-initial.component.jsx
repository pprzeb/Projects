import React from 'react';

import { useDrag } from 'react-dnd';
import { useDrop } from "react-dnd";


import './languages-menu-initial.style.scss'
let main = "Main"
const MenuItem = ({buttonStyle, name, onClick, onDrop}) => {
    const item = { name , type: 'box' };
    const [{isDragging}, drag] = useDrag({
        item,
        end(item, monitor) {
            const dropResult = monitor.getDropResult();
            if (dropResult) {
                const dropedItem = monitor.getItem().name
                onDrop(dropedItem)
            }
            
        }
      })    

    return (
        <button key={name+"id"} ref={drag} className={buttonStyle.get(name)[1]} name={name} onClick={onClick}>{name}</button>
    )
}



const MenuInitial = ({buttonStyle, langList, onClick, onDrop, mainLang}) => {
    main = mainLang

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
                        <MenuItem key={item} name={item} buttonStyle={buttonStyle} onClick={onClick} onDrop={onDrop}/>)}
                    <button ref={drop} key={"mainid"} className={'menu-item mai'} name='main'><h4>Main Language:</h4> {main}</button>
                </div>
            </div>
            
        </div>
    )
}

export default MenuInitial