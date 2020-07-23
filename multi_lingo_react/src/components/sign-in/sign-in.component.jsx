import React from 'react';

import './sign-in.style.scss'



import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
    super(props);
    
    this.state = {
        email: '',
        password: ''
        }
    this.handleChange = this.handleChange.bind(this)
    }
    
    
    handleSubmit = async event => {
        event.preventDefault();
        
        const {email, password} = this.state

        try {
          await auth.signInWithEmailAndPassword( email, password);
          this.setState({
            email: '',
            password: '',
            })

        }
        catch (error) {
            console.log(error)
        }
    }
    


    handleChange(e) {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    render() {
    const {email, password} = this.state;
    return (
        <div className='sign-in-box'>
            <h1 className='sign-in'>Sign In</h1>
            <form>
                <div className='input-container'>
                <input className="input" type='text' name='email' id="email" value={email} onChange={this.handleChange} required=" "/>
                <label>Email</label>
                </div>
                <div className='input-container'>
                <input className="input" type='password' name='password' id="password" value={password} onChange={this.handleChange} required=" "/>
                <label>Password</label>
                </div>
                <div className='btns'>
                <button type="button" onClick={signInWithGoogle} className="btn">Google</button>
                <button type="button" onClick={this.handleSubmit} className="btn">Sign In</button>
                </div>
                
            </form>
        </div>
    )}
}        

export default SignIn