import React from 'react';


import {searchImageBing} from '../../utils/searchImage.js'


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
        // this.callBackendApi()
        // .then(res => this.setState({input: res.data}))
        // .catch(err=> console.log(err))
        await searchImageBing('car')
        .then(data=>{
            
            
            this.setState({image: <img alt='mini' src={data.value[2].thumbnailUrl + '&w=200&h=200'}/>})})
    }
    
    // callBackendApi = async () => {
    //     const response = await fetch('http://localhost:5000/message');
    //     const data = await response.json();

    //     if (response.status !== 200) {
    //         throw Error(data.message)
    //     }
    //     return data
    // }

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