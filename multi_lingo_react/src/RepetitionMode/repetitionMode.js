import React from 'react';
import InputCard from './inputCard2';
import InputCardSentence from './inputCardSentence';



const keys = []; 
    for(let i=0; i<localStorage.length; i++) {
        keys.push(localStorage.key(i));
        keys.sort((a,b)=> a-b);
        }

class RepetitionMode extends React.Component {
    
constructor () {
    
    super();
    this.state = {
        inputs: new Map([
            ['english', ''],
            ['french', ''],
            ['romanian', ''],
            ['italian', ''],
            ['spanish', ''],
        ]),
        inputsSentences: new Map([
            ['english', ''],
            ['french', ''],
            ['romanian', ''],
            ['italian', ''],
            ['spanish', ''],
        ]),
        
        info: '',
        wordID: 0,
        word: JSON.parse(localStorage[keys[0]]),
        inputsStyle: new Map([
            ['english', 'w-50 ma1 pa1'],
            ['french', 'w-50 ma1 pa1'],
            ['romanian', 'w-50 ma1 pa1'],
            ['italian', 'w-50 ma1 pa1'],
            ['spanish', 'w-50 ma1 pa1'],
        ]),
        };
    
    this.getInput = this.getInput.bind(this);
    this.check = this.check.bind(this);
    this.getInputSentence = this.getInputSentence.bind(this);
    this.showWord = this.showWord.bind(this);
    this.nextWord = this.nextWord.bind(this);
    this.prevWord = this.prevWord.bind(this);
    this.firstInput = React.createRef();
    
}
    

getInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prev => ({inputs: prev.inputs.set(name, value)}));
    this.setState({info: ''});
    
}

getInputSentence (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prev => ({inputsSentences: prev.inputsSentences.set(name, value)}));
    this.setState({info: ''});
}

nextWord () {
    if (this.state.wordID<keys.length-1) {
    this.setState(prev =>({wordID: prev.wordID+1}));
    this.showWord(this.state.wordID+1);
    this.setState(prev => {for(let x of prev.inputs.keys()){prev.inputs.set(x, '')}});
    this.setState({info: ''});
    this.setState(prev => {for(let x of prev.inputsStyle.keys()){prev.inputsStyle.set(x, 'w-50 ma1 pa1')}});
    }
    
}

prevWord () {
    if (this.state.wordID>0) {
    this.setState(prev =>({wordID: prev.wordID-1})); 
    this.showWord(this.state.wordID-1);
    this.setState(prev => {for(let x of prev.inputs.keys()){prev.inputs.set(x, '')}});
    this.setState({info: ''});
    this.setState(prev => {for(let x of prev.inputsStyle.keys()){prev.inputsStyle.set(x, 'w-50 ma1 pa1')}});
    }
    
}

showWord (z) {
    let x = JSON.parse(localStorage[keys[z]]);
    this.setState({word: x});
}

check (e) {
    const name = e.target.name;
    if (e.target.value===this.state.word[name]) {
        this.setState(prev=> ({inputsStyle: prev.inputsStyle.set(name, 'w-50 ma1 pa1 ba bw1 bg-light-green b--green')}))
        
    } else this.setState(prev=> ({inputsStyle: prev.inputsStyle.set(name, 'w-50 ma1 pa1 ba bw1 bg-light-red b--red')}))
}



render() {
    

let langlist = [];
let langlistrest = [];
let langlistfirst = [];


this.props.lang.forEach((isChecked, name) => {
    if (isChecked && name!==this.props.mainLang) {
            langlist.push(name);
        langlistrest.push(name)
    }
})

langlistfirst = langlistrest.shift();





return (
    <div className=''>
        <h3>{this.state.wordID+1}/{keys.length}</h3>
        <h2 className='dib mt0'>{this.state.word[this.props.mainLang]}</h2>
        
        
        <div>
            {langlistfirst?(
                <div key={langlistfirst + 'ic'}>
                    <InputCard 
                                key={langlistfirst + 'IC'} 
                                inputRef={this.firstInput} 
                                langName={langlistfirst} 
                                getInput={this.getInput} 
                                value={this.state.inputs}
                                onBlur={this.check}
                                className={this.state.inputsStyle}/>
                    <InputCardSentence 
                                key={langlistfirst + 'ICS'} 
                                inputRef={this.firstInput} 
                                langName={langlistfirst} 
                                getInput={this.getInputSentence} 
                                value={this.state.inputsSentences}
                                
                                />
                    
                </div>
                                ):''}
            {langlistrest.map(item => 
                <div key={item+'div'}>
                    <InputCard 
                                key={item + 'IC'} 
                                langName={item} 
                                getInput={this.getInput} 
                                value={this.state.inputs}
                                onBlur={this.check}
                                className={this.state.inputsStyle}
                                />
                    <InputCardSentence 
                                key={item + 'ICS'} 
                                langName={item} 
                                getInput={this.getInputSentence} 
                                value={this.state.inputsSentences}/>
                </div>
            )}
                
        </div>
        
        <button className='bg-light-blue pa2 ma2 br3 shadow-5' onClick={this.prevWord}>Previous</button>
        <button className='bg-light-blue pa2 ma2 br3 shadow-5' onClick={this.nextWord}>Next</button>
        <p>{this.state.info}</p>
        
    </div>)
    

  }

}

export default RepetitionMode;