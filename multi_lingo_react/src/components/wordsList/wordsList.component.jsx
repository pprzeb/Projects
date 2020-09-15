import React from 'react';

import './wordsList.style.scss';
import { deleteWordFromDB, firestore } from '../../utils/firebase.utils';
import CustomButton from '../../components/customButton/customButton.component'
import {connect} from 'react-redux';
import styled from 'styled-components';

import {getUserWordsCollection} from '../../redux/user/user.actions'




const WordsList = ({checkedLangs, userWordsCollection, user, getUserWordsCollection}) => {
    const activeLangs = []
    const head = [];
    let rows = [];
    
    
    if (userWordsCollection[0]) 
    {
    checkedLangs.forEach((item, key) => {
        if (!item[0]) {
            return
        } else {
            head.push(<div key={key+'th'} className='headI'><p id={key}>{key}</p></div>);
            activeLangs.push(key)
            
        }   
    })} 

    const handleDelete = (e) => {
        console.log(e.target)
        deleteWordFromDB(user, e.target.id );
        const docRef = firestore.collection('users').doc(`${user.id}`).collection('words');
        const collection = [];
        docRef.get().then( querySnapshot => {
                querySnapshot.forEach( doc => {
                    collection.push([doc.id, doc.data(), doc.data().createdAt])
                });
                collection.sort((a,b) => b[2] -  a[2])
                getUserWordsCollection(collection);
         });
    }

    

    

    const rowCreate = (el, lang) => {return <div key={el[0]+lang+'div'} className='item'><p key={el[0]+lang} id={el[0]+lang}>{el[1][lang]}</p></div>}

    userWordsCollection.forEach(item => {
        rows.push(activeLangs.map(elem => rowCreate(item,elem)))
        rows.push(<CustomButton key={item+'delBtn'} className='deleteBtn' id={item[0]} onClick={handleDelete}>Delete</CustomButton>)
        
    })
    
    const GridWrapper = styled.div`
    margin: 5px;
    display: grid;
    grid-template-columns: repeat(${activeLangs.length+1}, 15%);
    grid-template-rows: auto;
    justify-content: center;
    gap: 10px 10px;
    `

    return(
        <div>
        <GridWrapper>
            {head}
        </GridWrapper>
        <GridWrapper>
            {rows}
        </GridWrapper>  
        </div>
        
    )
}

const mapStateToProps = state => ({
    checkedLangs: state.langs.checkedItems,
    user: state.user.currentUser,
    userWordsCollection: state.user.userWordsCollection,
})

const mapDispatchToProps = dispatch => ({
    getUserWordsCollection: collection => dispatch(getUserWordsCollection(collection)),
  })



export default connect(mapStateToProps, mapDispatchToProps)(WordsList)