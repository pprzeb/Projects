import React from 'react';

import './wordsList.style.scss';
import {firestore } from '../../firebase/firebase.utils'
import {connect} from 'react-redux';

const WordsList = (props) => {
    const lang = []
    const th = [];
    let trs = [];
    
    if (props.userWordsCollection[0]) 
    {
    props.checkedLangs.forEach((item, key) => {
        if (!item[0]) {
            return
        } else {
            th.push(<th key={key+'th'} id={key}>{key}</th>);
            lang.push(key)
            
        }
    })} 

    



    return(
        <table>
            <tbody>
            <tr>
                {th}
            </tr>
            </tbody>
            <tbody>
                {trs}
            </tbody>
                
        </table>
        
    )
}

const mapStateToProps = state => ({
    checkedLangs: state.langs.checkedItems,
    user: state.user.currentUser,
    userWordsCollection: state.user.userWordsCollection,
})

export default connect(mapStateToProps)(WordsList)