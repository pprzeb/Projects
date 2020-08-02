import React from 'react';
import styled from 'styled-components';

const labelColor = props =>{
	if (props.violet || props.children=='spanish') {
        return ('#540D6E')
	} else if (props.pink || props.children==='romanian')  {
		return ('#EE4266')
	} else if (props.orange || props.children==='italian') {
		return ('#FFD23F')
	} else if (props.caraibbean || props.children==='english') {
		return ('#3BCEAC')
	} else if (props.green || props.children==='french') {
		return ('#0EAD69')
	} else return ('#3cadd4')
};

const visibility = props => props.hidden?'hidden':'visible'

const Wrapper = styled.div`
    position: relative;
    margin: 5px
`

const StyledInput = styled.input`
    display: inline-block;
    width: ${props => props.inputSize || '90%'};
    padding: 8px 0 7px 15px;
    font-family: "Open Sans", sans;
    font-size: 1.2rem;
    color: #377D6A;
    background: #efefef;
    border: 0;
    border-radius: 3px;
    outline: 0;
    text-indent: ${props => props.hidden || '5.3rem'};
    transition: all .3s ease-in-out;

    &:focus {
        text-indent: ${props => props.hidden || '2.8rem'};
        background: #fff;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`

const StyledLabel = styled.label`
      visibility: ${visibility};
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      width: ${props => props.labelSize || '30%' };
      font-size: 0.8em;
      color: white;
      letter-spacing: 0.1em;
      padding: 9px;
      transition: all .3s ease-in-out;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      background: ${labelColor};

    ${StyledInput}:focus ~ & {
        transform: translateX(-40%);
    }
`


const CustomInput = ({label, ...other}) => (
    <Wrapper>
        <StyledInput {...other}/>
        <StyledLabel {...other}>{label}</StyledLabel>
    </Wrapper>
)



export default CustomInput