import React from 'react';

import { auth, createUserProfile } from '../../firebase/firebase.utils';

import './sign-up.style.scss'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmpassword: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange = e => {
        const {id, value} = e.target;
        this.setState({ [id]:value} )
        console.log(this.state)
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const {displayName, email, password, confirmpassword} = this.state
    
        try {
            if (password !== confirmpassword) {alert('repete your password');
                                            return}
            const { user } = await auth.createUserWithEmailAndPassword( email, password);
            console.log(user)
            console.log(displayName)
           await createUserProfile( user, {displayName});

           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmpassword: '',
           })

        }
        catch (error) {
            console.log(error)

        }

    }

    render() {

    const {displayName, email, password, confirmpassword} = this.state
    return (
        <div className='sign-up-box'>
            <h1 className='sign-up'>Sign Up</h1>
            <form>
                <div className='input-container'>
                <input className="input" type='text' id="displayName" value={displayName} onChange={this.handleChange} required=" "/>
                <label>Display Name</label>
                </div>
                <div className='input-container'>
                <input className="input" type='text' id="email" value={email} onChange={this.handleChange} required=" "/>
                <label>Email</label>
                </div>
                <div className='input-container'>
                <input className="input" type='password' id="password" value={password} onChange={this.handleChange} required=" "/>
                <label>Password</label>
                </div>
                <div className='input-container'>
                <input className="input" type='password' id="confirmpassword" value={confirmpassword} onChange={this.handleChange} required=" "/>
                <label>Confirm Password</label>
                </div>
                <div className='btns'>
                <button type="button" onClick={this.handleSubmit} className="btn">Sign Up</button>
                </div>
                
            </form>
        </div>
    )}
}        

export default SignUp;