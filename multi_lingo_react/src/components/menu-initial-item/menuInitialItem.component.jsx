import React from 'react';

import { useDrag } from 'react-dnd';


import { connect } from 'react-redux'

import { setLang } from '../../redux/languages/languages.actions'



import './menuInitialItem.style.scss'


const MenuInitialItem = (props) => {

    const {name, onDrop, setLang} = props
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

      
      
      const handleClick = (e) => {
        const item = e.target.name;
        let abr = item.substring(0,3)
        const isChecked = !props.checkedItems.get(item)[0];
        let buttonStyle;
        if (isChecked) {buttonStyle = `menu-item ${abr} active`} else {buttonStyle = `menu-item ${abr}`} ;
        let setButtonStyle = [isChecked, buttonStyle]
        // this.setState(prevState => ({checkedItems: prevState.checkedItems.set(item, setButtonStyle)}));
        
        setLang({item, setButtonStyle})
        console.log(props.checkedItems)
        
      }

      let button = <button key={name+"id"} ref={drag} className={props.checkedItems.get(name)[1]} name={name} onClick={handleClick}>{name}</button>

    return (
        button
    )
}
const mapStateToProps = state => ({
    checkedItems: state.lang.checkedItems
})

const mapDispatchToProps = dispatch => ({
    setLang: payload => dispatch(setLang(payload))
  })

export default connect(mapStateToProps, mapDispatchToProps)(MenuInitialItem)

