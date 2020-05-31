import React from 'react';
import InputCard from './inputCard2';
import InputCardSentence from './inputCardSentence';



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
        };
    
    this.getInput = this.getInput.bind(this);
    this.getInputSentence = this.getInputSentence.bind(this);
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

  



render() {


let langlist = [];
let langlistrest = [];
let langlistfirst = [];


this.props.lang.forEach((isChecked, name) => {
    if (isChecked) {
        langlist.push(name);
        langlistrest.push(name)
    }
})

langlistfirst = langlistrest.shift();





return (
    <div className=''>
        <h2 className='dib'>Text</h2>
        
        
        <div>
            {langlistfirst?(
                <div key={langlistfirst + 'ic'}>
                    <InputCard 
                                key={langlistfirst + 'IC'} 
                                inputRef={this.firstInput} 
                                langName={langlistfirst} 
                                getInput={this.getInput} 
                                value={this.state.inputs}/>
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
                                value={this.state.inputs}/>
                    <InputCardSentence 
                                key={item + 'ICS'} 
                                langName={item} 
                                getInput={this.getInputSentence} 
                                value={this.state.inputsSentences}/>
                </div>
            )}
                
        </div>
        
        <button className='bg-light-blue pa2 ma2 br3 shadow-5' onClick={this.addToDB}>Check</button>
        <button className='bg-light-blue pa2 ma2 br3 shadow-5' onClick={this.addToDB}>Next</button>
        <p>{this.state.info}</p>
        
    </div>)
    

  }

}

export default RepetitionMode;