import React from 'react';

import {searchImageBing} from './searchImage'


class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: false,
            input: '',
        }
        this.handleInput =this.handleInput.bind(this)
    }
    async componentDidMount() {
        await searchImageBing('car')
        .then(data=>{
            
            
            this.setState({image: <img alt='mini' src={data.value[2].thumbnailUrl + '&w=200&h=200'}/>})})
    }
    
    handleInput = (e) => {
        this.setState({input: e.target.value})
    }
    
    handleClick = async () => {
        await searchImageBing(this.state.input)
        .then(data=>{
            
            this.setState({image: <img alt='mini' src={data.value[1].thumbnailUrl + '&w=200'}/>})})
    }
    
    render() {

    return (
        <div>
        <input type="text" value={this.state.input} onChange={this.handleInput}></input>
        <button onClick={this.handleClick}>Search</button>
        <h2>Test Page</h2>
        
        {this.state.image?this.state.image:''}
        </div>
    )}
}

export default TestPage