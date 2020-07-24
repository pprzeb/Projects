import React from 'react';

import { Link } from 'react-router-dom';

import './header.component.scss';

import { auth } from '../../firebase/firebase.utils'

const Header = ({user}) => {


    return (
        <nav>
        
        <h1 className='hello'>Hello {user}!</h1>
        
        
        {/* <div clasName='pushright'></div> */}
        <h1>Multi Lingo</h1>
        
       
        {/* <div className='pushright'></div> */}
        
            <Link className='home' to='/'>Home</Link>
        
        
            <Link className='nav-item' to="/creation">C Mode</Link>
        
        
            <Link className='nav-item' to="/repetition">R Mode</Link>
        {user==='guess'?
        (<Link className='nav-item' to="/sign-in-sign-up">Sign In</Link>
        ):
        (<button key='navout' className='nav-item' onClick={() => auth.signOut()} title="Contact">Sign Out</button>    
        )}
        </nav>
    )
}

export default Header;


