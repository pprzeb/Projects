import React from 'react';


import { useDrop } from "react-dnd";

import { connect } from 'react-redux';

import { setMainLang } from '../../redux/mainLang/mainLang.actions';

import MenuInitialItem from '../menu-initial-item/menuInitialItem.component'
import { languages } from '../../variables';

import './menu-initial.style.scss'


const MenuInitial = ({mainLang}) => {
    

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
                    
                    {languages.map(item=>
                        <MenuInitialItem key={item} name={item} />)}
                        <button ref={drop} key={"mainid"} className={'menu-item mai'} name='main'><h4>Main Language:</h4> {mainLang}</button>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    mainLang: state.mainLang.mainLang
})

const mapDispatchToProps = dispatch => ({
    setMainLang: payload => dispatch(setMainLang(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuInitial);