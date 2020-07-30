import React from 'react';


import MainComponent from '../../components/main-component/main-component.component'
import CustomInput from '../../components/customInput/customInput.component'
import CustomButton from '../../components/customButton/customButton.component'
import WordsList from '../../components/wordsList/wordsList.component'
import styled from 'styled-components';

import './creation.style.scss'





const Creation = () => {

    const handler = (e) => console.log(e.target)
    return (
        <div>
            <MainComponent>
                <CustomInput langName='spanish' labelColor='orange'/>
                <CustomInput langName='english' labelColor='violet'/>
                <CustomInput langName='french' labelColor='caraibbean'/>
                <CustomInput langName='italian' labelColor='green'/>
                <CustomInput langName='romanian' labelColor='pink'/>
                <CustomButton violet onClick={handler} value='fdf'>english</CustomButton>
                <CustomButton orange onClick={handler} value='fdf'>romanian</CustomButton>
                <CustomButton green onClick={handler} value='fdf'>polish</CustomButton>
                <CustomButton caraibbean widthFix onClick={handler} value='fdf'>french</CustomButton>
                <CustomButton pink widthFix onClick={handler} value='fdf'>Add</CustomButton>
                <CustomButton onClick={handler} value='fdf'>send</CustomButton>
                
                <WordsList />
            </MainComponent>
            
        </div>

    )
}


export default Creation;