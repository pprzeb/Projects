import React from 'react';
import './css/App.css';
import CreationMode from './CreationMode/creationMode'
import checkboxes from './LanguagesList/checkboxes';
import Checkbox from './LanguagesList/Checkbox';
import RepetitionMode from './RepetitionMode/repetitionMode'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checkedItems: new Map([
        ['english', true],
        ['french', true],
        ['romanian', true],
        ['italian', true],
        ['spanish', true],
      ]),
      mainLang: 'english',
      operationMode: 'creationMode'
    }
    this.handleChange = this.handleChange.bind(this);
    this.onChangeMainLang = this.onChangeMainLang.bind(this);
    this.handleMode = this.handleMode.bind(this);
  }
  
  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({checkedItems: prevState.checkedItems.set(item, isChecked)}));
    if (item===this.state.mainLang && isChecked===false) {this.setState({mainLang: ''})}
  }

  onChangeMainLang(e) {
    const item = e.target.name;
    this.setState({mainLang: item});
    this.setState(prevState => ({checkedItems: prevState.checkedItems.set(item, true)}));    
  }
  
  handleMode (e) {
    this.setState({operationMode: e.target.name});
  }
  
render () {
  
  return (
    <div key='appls' className="tc">
      <nav className="tl pa3 pa4-ns">
        <a key='appls1' className="link dim black b f6 f5-ns dib mr3" href="http://localhost:3000/" title="Home">Site Name</a>
        <a key='appls2' className="link dim gray    f6 f5-ns dib mr3" href="http://localhost:3000/" title="Home">Home</a>
        <button key='appls3' className="link dim gray    f6 f5-ns dib mr3" href="http://localhost:3000/" onClick={this.handleMode} name="creationMode">Creation Mode</button>
        <button key='appls4' className="link dim gray    f6 f5-ns dib mr3" href="http://localhost:3000/"  onClick={this.handleMode} name="repetitionMode">Repetition Mode</button>
        <a key='appls5' className="link dim gray    f6 f5-ns dib" href="http://localhost:3000/" title="Contact">Contact</a>
      </nav>
      <header className='f3 white bg-blue ma1 dib br3 pa1 shadow-5'>Welcome to Multi Lingo App</header>
      <br></br>
      {this.state.operationMode==='creationMode'?<header className='f3 white bg-blue ma1 dib br3 pa1 shadow-5'>Creation Mode</header>:
      <header className='f3 white bg-blue ma1 dib br3 pa1 shadow-5'>Repetition Mode</header>
      }
      
      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <div className="fl w-100 w-20-ns pa2">
            <div className="outline bg-white pv2">
            <div className="pa3">
            <legend className="fw7 mb2">My languages</legend>
                <Checkbox 
                  key={this.state.mainLang} 
                  name={this.state.mainLang}
                  className="flex items-center mb2 bg-light-blue br3"
                  checked={this.state.checkedItems.get(this.state.mainLang)} 
                  onChange={this.handleChange} 
                  onChangeMainLang={this.onChangeMainLang}
                  button={false} 
                  disabled={true}
                  />
            <hr></hr>
              {
                checkboxes.map(item => (item.name===this.state.mainLang?'':
                <Checkbox 
                  key={item.name} 
                  name={item.name}
                  className="flex items-center mb2" 
                  checked={this.state.checkedItems.get(item.name)} 
                  onChange={this.handleChange} 
                  onChangeMainLang={this.onChangeMainLang}
                  button={true} />
              ))
              }

              
            </div>
            
            </div>
            
          </div>
          
          <div className="tc fl w-100 w-70-ns pa2">
            <div key='main' className="outline bg-washed-blue pv3">
            
                {this.state.operationMode==='creationMode'?<CreationMode lang={this.state.checkedItems}/>:
                <RepetitionMode lang={this.state.checkedItems} mainLang={this.state.mainLang}/>}
                
            
            </div>
            
          </div>
          <div className="fl w-100 w-10-ns pa2">
            <div className="outline bg-white pv4"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
}

export default App;
