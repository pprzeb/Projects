import React from 'react';
import InputCard from './inputCard';
import List from './List';


class MainBox extends React.Component {
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
        go: 'ok',
        info: '',
        };
    this.addToDB = this.addToDB.bind(this);
    this.getInput = this.getInput.bind(this);
    this.removeFromDB = this.removeFromDB.bind(this);
    this.firstInput = React.createRef();
    
}
    

getInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prev => ({inputs: prev.inputs.set(name, value)}));
    this.setState({info: ''});
    
}


  
addToDB(e) {
    e.preventDefault();
    const checkEmpty = () => {
            let acc = 0;
            this.state.inputs.forEach((value) => value===''?acc++:'');
            if (acc>=4) {return true};}
        
    if (checkEmpty()) {
        this.setState({info: 'write at least two words'});
        this.firstInput.current.focus();
    } else {
    let keys = []; 
    for(let i=0; i<localStorage.length; i++) {
        keys.push(localStorage.key(i));
        keys.sort((a,b)=> a-b);
        }
        
    let id = 1;
    for(let x of keys) {
        if (x === id.toString()) {
            id++
        }
    }
    
    const phraseDB = {}
    
    this.state.inputs.forEach((text, langID) => {
        phraseDB[langID] = text
    })
        
    localStorage.setItem(id,JSON.stringify(phraseDB));
    this.setState(prev => ({go: prev}));
    this.setState(prev => {for(let x of prev.inputs.keys()){prev.inputs.set(x, '')}})
    this.setState({info: 'added to database!'})
    this.firstInput.current.value = '';
    this.firstInput.current.focus();
    }
    

}

removeFromDB(e) {
    e.preventDefault();
    localStorage.removeItem(e.target.id);
    this.setState(prev => ({go: prev}));
    
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
        <div>
        
            <InputCard key={langlistfirst} inputRef={this.firstInput} langName={langlistfirst} getInput={this.getInput} value={this.state.inputs}/>
            {langlistrest.map(item => 
            <InputCard key={item} langName={item} getInput={this.getInput} value={this.state.inputs}/>
            )}
        </div>
        <button className='bg-light-blue pa2 ma2 br3 shadow-5' onClick={this.addToDB}>Add</button>
        <p>{this.state.info}</p>
        <div className='tc bg-light-purple tl ma3 pa3 br2 shadow-5 calisto b navy'>
            
            <List langlist={langlist} remove={this.removeFromDB}/>

            
        </div>
    </div>)
    

  }

}

export default MainBox;