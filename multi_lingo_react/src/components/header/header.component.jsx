import React from 'react';

import './header.component.scss';

import { auth } from '../../firebase/firebase.utils'

const Header = ({user}) => {


    return (
        <nav>
        <div className='pushright'></div>
        {/* <div clasName='pushright'></div> */}
        <div>
            <h1>Hello {user}! Welcome to Multi Lingo</h1>
        </div>
        {/* <div>
            <a key='appls2' className="" href="http://localhost:3000/" title="Home">Home</a>
        </div>
        <div>
            <a key='appls3' className="" href="http://localhost:3000/" onClick='' name="creationMode">CMode</a>    
        </div> */}
        <div className='pushright'></div>
        <div>
            <a key='appls5' className="option" onClick={() => auth.signOut()} href="http://localhost:3000/" title="Contact">Sign Out</a>    
        </div>
        
        {true?(<div>
            <a key='appls4' className="option" href="http://localhost:3000/"  name="repetitionMode">Sign In</a>    
        </div>):
        (<div>
            <a key='appls5' className="option" href="http://localhost:3000/" title="Contact">Sign Out</a>    
        </div>)}
        </nav>
    )
}

export default Header;


