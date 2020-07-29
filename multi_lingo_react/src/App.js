import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';
import HomePage from './pages/homePage/homePage';

import { createUserProfile, auth } from '../src/firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { setLang } from './redux/langs/langs.actions';

import Creation from './pages/creationPage/creation.component';
import Repetition from './pages/repetitionPage/repetition.component'

import CreationMode from './CreationMode/creationMode';
import checkboxes from './LanguagesList/checkboxes';
import Checkbox from './LanguagesList/Checkbox';
import RepetitionMode from './RepetitionMode/repetitionMode';

import './css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
  // new code
  // handleLanguagesChange(e) {
  //   const item = e.target.name;
  //   let abr = item.substring(0,3)
  //   const isChecked = !this.state.checkedItems.get(item)[0];
  //   let buttonStyle;
  //   if (isChecked) {buttonStyle = `menu-item ${abr} active`} else {buttonStyle = `menu-item ${abr}`} ;
  //   const setButtonStyle = [isChecked, buttonStyle]
  //   // this.setState(prevState => ({checkedItems: prevState.checkedItems.set(item, setButtonStyle)}));
  //   this.props.setLang({item, setButtonStyle})
  // }
 

  unsubscribeFromAuth = null;

  componentDidMount() {
    
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfile (userAuth);
          userRef.onSnapshot(snapShot => {
            setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
        } else {
        setCurrentUser(userAuth)  
        }
      }
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
render () {
  // const languages = ['spanish', 'romanian', 'italian', 'french', 'english'] 
  return (
    <div key='appls'>
    <Header />
    <Switch>
      <Route path='/sign-in-sign-up' component= {SignInSignUp } />
      <Route exact path='/' render={(props) => <HomePage {...props}/>} />
      <Route path='/creation' component= {Creation} />
      <Route path='/repetition' render={(props) => <Repetition />} />
    </Switch>
      
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
     
    </div>     
    )
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setLang: payload => dispatch(setLang(payload))
})

export default connect(null, mapDispatchToProps)(App);
