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
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({checkedItems: prevState.checkedItems.set(item, isChecked)}))
  }
  
render () {
  
  return (
    <div key='appls' className="tc">
      <nav className="tl pa3 pa4-ns">
        <a key='appls1' className="link dim black b f6 f5-ns dib mr3" href="http://localhost:3000/" title="Home">Site Name</a>
        <a key='appls2' className="link dim gray    f6 f5-ns dib mr3" href="http://localhost:3000/" title="Home">Home</a>
        <a key='appls3' className="link dim gray    f6 f5-ns dib mr3" href="http://localhost:3000/" title="About">About</a>
        <a key='appls4' className="link dim gray    f6 f5-ns dib mr3" href="http://localhost:3000/" title="Store">Store</a>
        <a key='appls5' className="link dim gray    f6 f5-ns dib" href="http://localhost:3000/" title="Contact">Contact</a>
      </nav>
      <header className='f3 white bg-blue ma1 dib br3 pa3 shadow-5'>Welcome to Multi Lingo App</header>
      <header className='f3 white bg-blue ma1 dib br3 pa3 shadow-5'>Creation mode</header>
      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <div className="fl w-100 w-20-ns pa2">
            <div className="outline bg-white pv2">
            <div className="pa3">
            <legend className="fw7 mb2">My languages</legend>
              {
                checkboxes.map(item => (
                <Checkbox key={item.name} name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
              ))
              }
            </div>
            </div>
          </div>
          <div className="tc fl w-100 w-70-ns pa2">
            <div key='main' className="outline bg-washed-blue pv3">
            
                {/* <CreationMode lang={this.state.checkedItems}/> */}
                <RepetitionMode lang={this.state.checkedItems}/>
            
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
