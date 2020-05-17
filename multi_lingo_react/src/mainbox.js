import React from 'react';
import InputCard from './inputCard';
import List from './List';


class MainBox extends React.Component {
constructor () {
    super();
    this.state = {
        inputs: new Map()
        }
    this.addToDB = this.addToDB.bind(this);
    this.getInput = this.getInput.bind(this);
}
    

getInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prev => ({inputs: prev.inputs.set(name, value)}))
}


  
addToDB(e) {
    e.preventDefault();
    
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
    console.log(keys, id)
    const phraseDB = {}
    
    this.state.inputs.forEach((text, langID) => {
        phraseDB[langID] = text
    })
    
    localStorage.setItem(id,JSON.stringify(phraseDB));
}

render() {

let langconst = [];

this.props.lang.forEach((isChecked, name) => {
    if (isChecked) {
        langconst.push({name})
    }
})


   
 return (
    <div className=''>
        <div>
            {langconst.map(item => 
            <InputCard key={item.name} langName={item.name} getInput={this.getInput} />
            )}
        </div>
        <button className='bg-light-blue pa2 ma2 br3 shadow-5' onClick={this.addToDB}>Add</button>
        <div className='bg-light-purple tl ma3 pa3 br2 shadow-5 calisto b navy'>
            <List />
        </div>
    </div>)
    

  }

}

export default MainBox;