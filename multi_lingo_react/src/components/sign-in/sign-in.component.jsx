import React, { useState } from 'react';

import './sign-in.style.scss'



import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

const SignIn = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
const handleSubmit = async event => {
        event.preventDefault();
                
        try {
        await auth.signInWithEmailAndPassword( email, password );
        
        setEmail('');
        setPassword('');

        }
        catch (error) {
            alert(error)
        }
    }
    


  

    
    return (
        <div className='sign-in-box'>
            <h1 className='sign-in'>Sign In</h1>
            <form>
                <div className='input-container'>
                <input className="input" type='text' name='email' id="email" value={email} onChange={(event) => {setEmail(event.target.value)
                
                }} required=" "/>
                <label>Email</label>
                </div>
                <div className='input-container'>
                <input className="input" type='password' name='password' id="password" value={password} onChange={(event) => setPassword(event.target.value)} required=" "/>
                <label>Password</label>
                </div>
                <div className='btns'>
                <button type="button" onClick={signInWithGoogle} className="btn">Google</button>
                <button type="button" onClick={handleSubmit} className="btn">Sign In</button>
                </div>
                
            </form>
        </div>
    )
}        

export default SignIn