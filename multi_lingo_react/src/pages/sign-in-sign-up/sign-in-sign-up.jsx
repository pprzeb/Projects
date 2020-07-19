import React from 'react';

import './sign-in-sign-up.scss';

const SignInSignUp = () => {



    return (
        <div className='sign-in-box'>
            <h1 className='sign-in'>Sign In</h1>
            <from>
                <div className='input-container'>
                <input className="input" type='text' id="email" required=" "/>
                <label>User name</label>
                </div>
                <div className='input-container'>
                <input className="input" type='password' id="password" required=" "/>
                <label>Password</label>
                </div>
                
		        <button type="button" class="btn">submit</button>
            </from>
            
            
        </div>
        
    )
}

export default SignInSignUp