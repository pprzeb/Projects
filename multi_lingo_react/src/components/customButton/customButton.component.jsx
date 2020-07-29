import React from 'react';
import styled from 'styled-components';


// import './customButton.style.scss'


let color = props => ( props.cgreen ? "rgb(238, 66, 102)": "rgb(255, 210, 63)");

const CustomButton = styled.button`
 display:inline-block;
 padding:0.3em 1.2em;
 margin:0 0.1em 0.1em 0;
 border:0.16em solid rgba(255,255,255,0);
 border-radius:2em;
 box-sizing: border-box;
 text-decoration:none;
 background-color: ${color};
 font-size: 1rem;
 color:#FFFFFF;
 text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
 text-align:center;
 transition: all 0.2s;
&:focus{
    outline: none;
}
 &:hover{
 border-color: rgba(255,255,255,1);
}

`

// class CustomButton extends React.Component {
    
    



//     render() {
//         return (
//             <StyledButton>{this.props.butt}</StyledButton>
//         )
//     }
    


// render(
//     <CustomButton>{props.butt}</CustomButton>
// ) 


export default CustomButton