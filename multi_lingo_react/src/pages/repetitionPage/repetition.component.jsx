import React from 'react';

import MainComponent from '../../components/main-component/main-component.component'
import CustomInput from '../../components/customInput/customInput.component';
import CustomButton from '../../components/customButton/customButton.component'
import './repetition.style.scss';

import styled from 'styled-components';




import { connect } from 'react-redux';

const CorrectionWord = styled.p`
margin: 0px;
padding: 0px;
padding-left: 40%;
font-size: 0.9rem;
line-height: 0.8rem;
font-weight: bold;
letter-spacing: 0.1rem;
${'' /* text-align: right; */}
color: red`

const CorrectionSentence = styled.p`
margin: 0px;
font-size: 0.9rem;
line-height: 0.8rem;
padding: 0px;
color: green`

class RepetitionPage extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            
            collectionIndex: 0,
            hidden: true,
            englishInput: '',
            frenchInput: '',
            romanianInput: '',
            italianInput: '',
            spanishInput: '',
            englishSentence: '',
            frenchSentence: '',
            romanianSentence: '',
            italianSentence: '',
            spanishSentence: '',
        }

        this.handlerInput = this.handlerInput.bind(this);
        this.check = this.check.bind(this);
        this.nextWord = this.nextWord.bind(this);
        this.previousWord = this.previousWord.bind(this)
    }
    
    nextWord () {
        this.setState({ collectionIndex: (this.state.collectionIndex<this.props.userWordsCollection.length-1)?
            this.state.collectionIndex+1:this.state.collectionIndex,
                        hidden: true
                    })
        }

    previousWord () {
            this.setState({ collectionIndex: (this.state.collectionIndex>0)?
                this.state.collectionIndex-1:this.state.collectionIndex,
                            hidden: true
                        })
        }
    
    check = () => {
        this.setState({
                    hidden: false
            })
            console.log(this.state)
        }
    
    handlerInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
     }

    

    render() { 
    const {checkedLangs, userWordsCollection, mainLang} = this.props;
    
    
 
 
    const inputs = [];
    const wordToDisplay = userWordsCollection[0]?
        userWordsCollection[this.state.collectionIndex][1][mainLang]:
        'loading...'

    checkedLangs.forEach((item, key) => {
        if (!item[0]) {
            return
        } else {
            inputs.push(<CustomInput 
                            id={key+'Input'} 
                            key={key+'Input'} 
                            value={this.state[[key]+'Input']} 
                            onChange={this.handlerInput} 
                            label={key} />);
            inputs.push(<CustomInput 
                            id={key+'Sentence'} 
                            key={key+'Sentence'} 
                            value={this.state[[key]+'Sentence']} 
                            onChange={this.handlerInput} 
                            inputSize='95%'
                            hidden
                            />)
            inputs.push(<CorrectionWord 
                            hidden={this.state.hidden} 
                            key={key+'correction'}>
                            {userWordsCollection[0]?
                                userWordsCollection[this.state.collectionIndex][1][key]:''}
                        </CorrectionWord>)
            inputs.push(<CorrectionSentence 
                            hidden={this.state.hidden} 
                            key={key+'correctionsentence'}>
                            {this.state.correctionSentence}
                        </CorrectionSentence>)
        }
    } )
    
    
    return(
        <div>
            <MainComponent>
                <div className='repWrapper'>
                <div>
                    <h3>{wordToDisplay} {this.state.collectionIndex+1}/{this.props.userWordsCollection.length}</h3>
                </div>
                <div className='wrapper'>
                    {inputs}
                </div>
                <div>
                    <CustomButton onClick={this.previousWord}>Previous</CustomButton>   
                    <CustomButton onClick={this.check}>Check</CustomButton>
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
    user: state.user.currentUser,
    userWordsCollection: state.user.userWordsCollection,
    mainLang: state.mainLang.mainLang
})

export default connect(mapStateToProps)(RepetitionPage);