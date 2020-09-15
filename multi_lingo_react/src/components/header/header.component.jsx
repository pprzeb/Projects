import React from 'react';

import { Link } from 'react-router-dom';

import './header.component.scss';

import { auth } from '../../utils/firebase.utils'

import { connect } from 'react-redux'

const Header = ({user}) => {
    

    return (
        <nav>
        
        <h1 className='hello'>Hello {user?user.displayName:"guess"}!</h1>
        <h1>Multi Lingo</h1>
        
        <Link className='home' to='/'>Home</Link>
        
        <Link className='nav-item' to="/creation">Create your words</Link>
        <Link className='nav-item' to="/repetition">Repeate</Link>
        {user===null?
        (<Link className='nav-item' to="/sign-in-sign-up">Sign In</Link>
        ):
        (<button key='navout' className='nav-item' onClick={() => auth.signOut()} title="Contact">Sign Out</button>    
        )}
        </nav>
    )
}
const mapStateToProps = state => ({
    user: state.user.currentUser

})


export default connect(mapStateToProps)(Header);


