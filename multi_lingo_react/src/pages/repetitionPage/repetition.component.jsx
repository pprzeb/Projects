import React from 'react';

import MainComponent from '../../components/main-component/main-component.component'
import CustomInput from '../../components/customInput/customInput.component';
import CustomButton from '../../components/customButton/customButton.component'
import './repetition.style.scss';
import {db} from '../../example';

import {addWordsToDB, firestore, auth} from '../../firebase/firebase.utils'

import { connect } from 'react-redux';


class RepetitionPage extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            docIDS: [],
            activeWord: ' ',
            activeWordIndex: 0
        }

        this.handlerInput = this.handlerInput.bind(this);
        this.handlerCheck = this.handlerCheck.bind(this);
        this.handlerClickTest = this.handlerClickTest.bind(this);
        this.nextWord = this.nextWord.bind(this)
    }
    getdata = () => {
        if (!this.props.user) return;
        const docRef = firestore.collection('users').doc(`${this.props.user.id}`).collection('words')
        const docIDS = []
        
        docRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                docIDS.push(doc.id) 
            }) 
        })

        this.setState({docIDS: docIDS})
        setTimeout(this.nextWord, 1000)
    }

    componentDidMount() {
      if (this.props.user) {
           this.getdata()
        } else setTimeout(this.getdata, 1000)
        
    }
    
    async nextWord () {
        const docRef = firestore.collection('users').doc(`${this.props.user.id}`)
            .collection('words')
            .doc(this.state.docIDS[this.state.activeWordIndex])
        await docRef.get().then(data => {this.setState({activeWord: data.data().english})})
        this.setState({activeWordIndex: this.state.activeWordIndex+1})
        
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
    
    return(
        <div>
            <MainComponent>
                <div className='repWrapper'>
                <div>
                    <h5>{this.state.activeWord}</h5>
                    <h6>{this.state.activeWordIndex}</h6>
                    
                </div>
                <div className='wrapper'>
                    {inputs}
                </div>
                <div>
                    <CustomButton onClick={this.handlerCheck}>Check</CustomButton>
                    <CustomButton onClick={this.nextWord}>Next</CustomButton>
                    
                </div>
                </div>
            </MainComponent>
        </div>
    )   
    }
}


const mapStateToProps = state => ({
    checkedLangs: state.langs.checkedItems,
    user: state.user.currentUser
})

export default connect(mapStateToProps)(RepetitionPage);