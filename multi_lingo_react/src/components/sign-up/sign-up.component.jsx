import React from 'react';

import './sign-up.style.scss'

const SignUp = () => {

    return (
        <div className='sign-up-box'>
            <h1 className='sign-up'>Sign Up</h1>
            <from>
                <div className='input-container'>
                <input className="input" type='text' id="name" required=" "/>
                <label>Name</label>
                </div>
                <div className='input-container'>
                <input className="input" type='text' id="surname" required=" "/>
                <label>Surname</label>
                </div>
                <div className='input-container'>
                <input className="input" type='text' id="email" required=" "/>
                <label>Email</label>
                </div>
                <div className='input-container'>
                <input className="input" type='password' id="password" required=" "/>
                <label>Password</label>
                </div>
                <div className='input-container'>
                <input className="input" type='password' id="confirmpassword" required=" "/>
                <label>Confirm Password</label>
                </div>
                <div className='btns'>
                <button type="button" className="btn">Sign Up</button>
                </div>
                
            </from>
        </div>
    )
}        

export default SignUp;