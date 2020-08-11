import React from 'react';


import MainComponent from '../../components/main-component/main-component.component'
import CustomInput from '../../components/customInput/customInput.component'
import CustomButton from '../../components/customButton/customButton.component'
import WordsList from '../../components/wordsList/wordsList.component'

import {addWordsToDB, firestore} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';
import {getUserWordsCollection} from '../../redux/user/user.actions'

import './creation.style.scss'


class Creation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            english: '',
            french: '',
            romanian: '',
            italian: '',
            spanish: '',
        }
        
    }
    
    


    handlerAdd = async () => {
        let data = {
            english: this.state.english,
            french: this.state.french,
            romanian: this.state.romanian,
            italian: this.state.italian,
            spanish: this.state.spanish
        }
        this.setState({
            english: '',
            french: '',
            romanian: '',
            italian: '',
            spanish: '',
        })

        const { user, getUserWordsCollection } = this.props

        const docRef = firestore.collection('users').doc(`${user.id}`).collection('words');
            const collection = [];
            docRef.get().then( querySnapshot => {
                querySnapshot.forEach( doc => {
                    collection.push([doc.id, doc.data(), doc.data().createdAt])
                });
                collection.sort((a,b) => b[2] -  a[2])
                getUserWordsCollection(collection);
                });
            
        
        await addWordsToDB(user, data)

        
    
    }

    handlerInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

     }


    render() {
    const langs = []
    
    this.props.checkedLangs.forEach((item, key) => {
        if (!item[0]) {
            return
        } else {langs.push(<CustomInput key={key+'inputCreation'} id={key} label={key} value={this.state[key]} onChange={this.handlerInput} inputSize='90%'/>)}}
        )
    
    

    return (
        <div className='creationPage'>
            <MainComponent >
                
                <div className="creWrapper">
                {langs}
                </div>
                <div>
                
                <CustomButton onClick={this.handlerAdd}>Add</CustomButton>
              
                <WordsList />
                </div>
            </MainComponent>
            
        </div>

    )}
}
const mapStateToProps = state => ({
    checkedLangs: state.langs.checkedItems,
    user: state.user.currentUser,
    userWordsCollection: state.user.userWordsCollection,
})

const mapDispatchToProps = dispatch => ({
    getUserWordsCollection: collection => dispatch(getUserWordsCollection(collection)),
    
  })


export default connect(mapStateToProps, mapDispatchToProps)(Creation);