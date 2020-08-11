import React from 'react';

import { useDrag } from 'react-dnd';


import { connect } from 'react-redux'

import { setLang } from '../../redux/langs/langs.actions'

import { setMainLang } from '../../redux/mainLang/mainLang.actions';

import './menuInitialItem.style.scss'



const MenuInitialItem = (props) => {

    const {name, setMainLang, setLang} = props;

    const item = { name , type: 'box' };
    const [, drag] = useDrag({
        item,
        end(item, monitor) {
            const dropResult = monitor.getDropResult();
            if (dropResult) {
                const dropedItem = monitor.getItem().name
                setMainLang(dropedItem)
                
            }
            
        }
      })    

      
      
      const handleClick = (e) => {
        const item = e.target.name;
        let abr = item.substring(0,3)
        const isChecked = !props.checkedItems.get(item)[0];
        let buttonStyle;
        if (isChecked) {buttonStyle = `menu-item ${abr} active`} else {buttonStyle = `menu-item ${abr}`} ;
        let setButtonStyle = [isChecked, buttonStyle]
                
        setLang({item, setButtonStyle}) 
        
        
      }

      let button = <button key={name+"id"} ref={drag} className={props.checkedItems.get(name)[1]} name={name} onClick={handleClick}>{name}</button>

    return (
        button
    )
}
const mapStateToProps = state => ({
    checkedItems: state.langs.checkedItems
})


const mapDispatchToProps = dispatch => ({
    setLang: payload => dispatch(setLang(payload)),
    setMainLang: payload => dispatch(setMainLang(payload))
  })

export default connect(mapStateToProps, mapDispatchToProps)(MenuInitialItem)

