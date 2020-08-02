import React from 'react';

import MainComponent from '../../components/main-component/main-component.component'
import CustomInput from '../../components/customInput/customInput.component';
import CustomButton from '../../components/customButton/customButton.component'
import './repetition.style.scss';


import {addWordsToDB, firestore} from '../../firebase/firebase.utils'

import { connect } from 'react-redux';


class RepetitionPage extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            nostate: 'nostate'
        }

        this.handlerInput = this.handlerInput.bind(this);
        this.handlerCheck = this.handlerCheck.bind(this);
        this.handlerClickTest = this.handlerClickTest.bind(this);
        this.nextWord = this.nextWord.bind(this)
    }
    
    componentDidMount() {
        console.log('ww', this.props.userWordsCollection)
    }
    
    async nextWord () {
        
    }
    
    handlerInput = (e) => {
        console.log(e.target.id, e.target.value)    
    }

    handlerCheck = async (e) => {
        let data = {
            english: 'nwfa ',
            french: 'hello ',
            italian: 'ciao'
        }
        console.log(e.target)
        await addWordsToDB(this.props.user, data)
    }

    handlerClickTest = async (e) => {
        console.log(e.target)
        
    }

    test = () => {
        console.log(this.props.userWordsCollection)
    }

    render() { 
    const {checkedLangs} = this.props;
    const inputs = [];

    checkedLangs.forEach((item, key) => {
        if (!item[0]) {
            return
        } else {
            inputs.push(<CustomInput id={key+'Input'} key={key+'Input'} onChange={this.handlerInput} label={key} />);
            inputs.push(<CustomInput id={key+'Example'} key={key+'Example'} onChange={this.handlerInput} inputSize='30rem' hidden />)
        }
    } )
    console.log('fd', this.props.userWordsCollection)
    let x = this.props.userWordsCollection.one?this.props.userWordsCollection.one.english:'loading...'
    return(
        <div>
            <MainComponent>
                <div className='repWrapper'>
                <div>
                    <h5>{this.state.activeWord}</h5>
                    <h6>{this.state.activeWordIndex}</h6>
                    <h1>{this.props.userWordsCollection?x:'n'}</h1>
                    
                </div>
                <div className='wrapper'>
                    {inputs}
                </div>
                <div>
                    <CustomButton onClick={this.handlerCheck}>Check</CustomButton>
                    <CustomButton onClick={this.nextWord}>Next</CustomButton>
                    <CustomButton onClick={this.test}>test</CustomButton>
                    
                </div>
                </div>
            </MainComponent>
        </div>
    )   
    }
}


const mapStateToProps = state => ({
    checkedLangs: state.langs.checkedItems,
    user: state.user.currentUser,
    userWordsCollection: state.user.userWordsCollection
})

export default connect(mapStateToProps)(RepetitionPage);