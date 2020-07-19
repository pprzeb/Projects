import React from 'react';


import Header from './components/header/header.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up'
import HomePage from './pages/homePage/homePage'


import './css/App.css';
import CreationMode from './CreationMode/creationMode'
import checkboxes from './LanguagesList/checkboxes';
import Checkbox from './LanguagesList/Checkbox';
import RepetitionMode from './RepetitionMode/repetitionMode'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map([
        ['english', [false, 'menu-item eng']],
        ['french', [false, 'menu-item fre']],
        ['romanian', [false, 'menu-item rom']],
        ['italian', [false, 'menu-item ita']],
        ['spanish', [false, 'menu-item spa']],
      ]),
      mainLang: 'english',
      operationMode: 'creationMode',
    }
    
    this.onChangeMainLang = this.onChangeMainLang.bind(this);
    this.handleMode = this.handleMode.bind(this);
    this.handleLanguagesChange = this.handleLanguagesChange.bind(this)
  }
  
  
  // new code
  handleLanguagesChange(e) {
    const item = e.target.name;
    let abr = item.substring(0,3)
    const isChecked = !this.state.checkedItems.get(item)[0];
    let buttonStyle;
    if (isChecked) {buttonStyle = `menu-item ${abr} active`} else {buttonStyle = `menu-item ${abr}`} ;
    const setButtonStyle = [isChecked, buttonStyle]
    this.setState(prevState => ({checkedItems: prevState.checkedItems.set(item, setButtonStyle)}));
    console.log(this.state.checkedItems)
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
  const languages = ['spanish', 'romanian', 'italian', 'french', 'english'] 
  return (
    <div key='appls' className="tc">
      <Header />
      <SignInSignUp />
      <HomePage 
                  lang ={languages} 
                  checkedLanguages = {this.state.checkedItems} 
                  handleLanguagesChange={this.handleLanguagesChange}
      />
      {/* <Checkbox 
                  key={this.state.mainLang} 
                  name={this.state.mainLang}
                  className="flex items-center mb2 bg-light-blue br3"
                  checked={this.state.checkedItems.get(this.state.mainLang)[0]} 
                  onChange={this.handleLanguagesChange} 
                  onChangeMainLang={this.onChangeMainLang}
                  button={false} 
                  disabled={true}
      />
      {checkboxes.map(item => (item.name===this.state.mainLang?'':
      <Checkbox 
                  key={item.name} 
                  name={item.name}
                  className="flex items-center mb2" 
                  checked={this.state.checkedItems.get(item.name)[0]} 
                  onChange={this.handleLanguagesChange} 
                  onChangeMainLang={this.onChangeMainLang}
                  button={true} />
      ))} */}
      {/* {this.state.operationMode==='creationMode'?
        <CreationMode lang={this.state.checkedItems}/>:
        <RepetitionMode lang={this.state.checkedItems} mainLang={this.state.mainLang}/>} */}
    </div>     
    )
  }
}

export default App;
