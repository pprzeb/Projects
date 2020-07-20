import React from 'react';

import './header.component.scss';

const Header = (props) => {


    return (
        <nav>
        <div className='pushright'></div>
        {/* <div className='pushright'></div> */}
        <div>
            <h1>Multi Lingo</h1>
        </div>
        {/* <div>
            <a key='appls2' className="" href="http://localhost:3000/" title="Home">Home</a>
        </div>
        <div>
            <a key='appls3' className="" href="http://localhost:3000/" onClick='' name="creationMode">CMode</a>    
        </div> */}
        <div className='pushright'></div>
        
        
        {true?(<div>
            <a key='appls4' className="option" href="http://localhost:3000/"  onClick='' name="repetitionMode">Sign In</a>    
        </div>):
        (<div>
            <a key='appls5' className="option" href="http://localhost:3000/" title="Contact">Sign Out</a>    
        </div>)}
        </nav>
    )
}

export default Header;


