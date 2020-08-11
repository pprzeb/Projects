import React, {useState} from 'react';

import { auth, createUserProfile } from '../../firebase/firebase.utils';

import './sign-up.style.scss'

const SignUp = () =>  {
       
    const [displayName, setDispayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    

const handleSubmit = async event => {
        event.preventDefault();
        
        try {
            if (password !== confirmPassword) {alert('repete your password');
                                            return}
            const { user } = await auth.createUserWithEmailAndPassword( email, password);
            
           await createUserProfile( user, {displayName});
               setDispayName('');
               setEmail('');
               setPassword('');
               setConfirmPassword('');
        }
        catch (error) {
            alert(error)
            console.log(error)
        }

    }

    

    
    return (
        <div className='sign-up-box'>
            <h1 className='sign-up'>Sign Up</h1>
            <form>
                <div className='input-container'>
                <input className="input" type='text' id="displayName" value={displayName} onChange={(e) => setDispayName(e.target.value)} required=" "/>
                <label>Display Name</label>
                </div>
                <div className='input-container'>
                <input className="input" type='text' id="email" value={email} onChange={(e) => setEmail(e.target.value)} required=" "/>
                <label>Email</label>
                </div>
                <div className='input-container'>
                <input className="input" type='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} required=" "/>
                <label>Password</label>
                </div>
                <div className='input-container'>
                <input className="input" type='password' id="confirmpassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required=" "/>
                <label>Confirm Password</label>
                </div>
                <div className='btns'>
                <button type="button" onClick={handleSubmit} className="btn">Sign Up</button>
                </div>
                
            </form>
        </div>
    )
}        

export default SignUp;