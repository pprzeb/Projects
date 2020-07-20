import React from 'react';

import './sign-in.style.scss'

const SignIn = () => {

    return (
        <div className='sign-in-box'>
            <h1 className='sign-in'>Sign In</h1>
            <from>
                <div className='input-container'>
                <input className="input" type='text' id="email" required=" "/>
                <label>Email</label>
                </div>
                <div className='input-container'>
                <input className="input" type='password' id="password" required=" "/>
                <label>Password</label>
                </div>
                <div className='btns'>
                <button type="button" className="btn">submit</button>
                <button type="button" className="btn">submit</button>
                </div>
                
            </from>
        </div>
    )
}        

export default SignIn