import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';
import HomePage from './pages/homePage/homePage';

import { createUserProfile, auth, firestore } from '../src/firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser, getUserWordsCollection } from './redux/user/user.actions';
import { setLang } from './redux/langs/langs.actions';

import Creation from './pages/creationPage/creation.component';
import Repetition from './pages/repetitionPage/repetition.component'



import './css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    
    const { setCurrentUser, getUserWordsCollection } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
          const userRef = await createUserProfile (userAuth);
          userRef.onSnapshot(snapShot => {
            const docRef = firestore.collection('users').doc(`${snapShot.id}`).collection('words');
            const collection = []
            docRef.get().then( querySnapshot => {
              console.log('qs', querySnapshot.docs[0].data().createdAt)
                querySnapshot.forEach( doc => {
                    collection.push([doc.id, doc.data(), doc.data().createdAt])
                })
                collection.sort((a,b) => a -b )
                console.log(collection)
                getUserWordsCollection(collection)
                
            });
            
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
  
  return (
    <div key='appls'>
    <Header />
    <Switch>
      <Route path='/sign-in-sign-up' component= {SignInSignUp } />
      <Route exact path='/' render={(props) => <HomePage {...props}/>} />
      <Route path='/creation' component= {Creation} />
      <Route path='/repetition' render={(props) => <Repetition />} />
    </Switch>
     
    </div>     
    )
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  getUserWordsCollection: collection => dispatch(getUserWordsCollection(collection)),
  setLang: payload => dispatch(setLang(payload))
})

export default connect(null, mapDispatchToProps)(App);
