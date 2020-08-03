import React from 'react';

import './wordsList.style.scss';
import {firestore } from '../../firebase/firebase.utils'
import {connect} from 'react-redux';

const WordsList = (props) => {
    const langs = []
    const th = [];
    let trs = [];
    console.log(props.userWordsCollection)
    
    if (props.userWordsCollection[0]) 
    {
    props.checkedLangs.forEach((item, key) => {
        if (!item[0]) {
            return
        } else {
            th.push(<th key={key+'th'} id={key}>{key}</th>);
            langs.push(key)
            
        }
    })} 
    const rowCreate = (el, lang) => {return <td>{el[1][lang]}</td>}

    props.userWordsCollection.forEach(item => {
        trs.push(<tr>
                {langs.map(elem => rowCreate(item,elem))}
                </tr>)
    })
    



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