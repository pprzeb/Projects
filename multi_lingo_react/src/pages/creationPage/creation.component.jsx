import React from 'react';


import MainComponent from '../../components/main-component/main-component.component'
import CustomInput from '../../components/customInput/customInput.component'
import CustomButton from '../../components/customButton/customButton.component'
import WordsList from '../../components/wordsList/wordsList.component'
import styled from 'styled-components';

import './creation.style.scss'

const Button = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Creation = () => {

    const handler = (e) => console.log(e.target)
    return (
        <div>
            <MainComponent>
                <CustomInput langName='spanish'/>
                <CustomInput langName='english'/>
                <CustomInput langName='french'/>
                <CustomInput langName='italian'/>
                <CustomInput langName='romanian'/>
                <CustomButton butt='blabla'  onClick={handler} value='fdf'>wow fsadlfaksdjf</CustomButton>
                <Button> hello </Button>
                <WordsList />
            </MainComponent>
            
        </div>

    )
}


export default Creation;