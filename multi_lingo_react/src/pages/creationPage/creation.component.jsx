import React from 'react';


import MainComponent from '../../components/main-component/main-component.component'
import CustomInput from '../../components/customInput/customInput.component'
import CustomButton from '../../components/customButton/customButton.component'
import WordsList from '../../components/wordsList/wordsList.component'

import './creation.style.scss'


const Creation = () => {
    return (
        <div>
            <MainComponent>
                <CustomInput langName='spanish'/>
                <CustomInput langName='english'/>
                <CustomInput langName='french'/>
                <CustomInput langName='italian'/>
                <CustomInput langName='romanian'/>
                <CustomButton />
                <WordsList />
            </MainComponent>
            
        </div>

    )
}


export default Creation;