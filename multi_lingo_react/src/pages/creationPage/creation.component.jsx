import React from 'react';


import MainComponent from '../../components/main-component/main-component.component'
import CustomInput from '../../components/customInput/customInput.component'
import CustomButton from '../../components/customButton/customButton.component'
import WordsList from '../../components/wordsList/wordsList.component'

import {addWordsToDB, firestore} from '../../firebase/firebase.utils'


import './creation.style.scss'





const Creation = () => {
    const handlerAdd = async (e) => {
        let data = {
            english: 'tdfsd ',
            french: 'hello ',
            italian: 'ciao'
        }
        console.log(e.target)
        await addWordsToDB(this.props.user, data)
    }
    const handler = (e) => console.log(e.target.id)
    return (
        <div >
            <MainComponent>
                <div className="creWrapper">
                <CustomInput label='english' caraibean/>
                <CustomInput label='french' orange/>
                <CustomInput label='italian' pink/>
                <CustomInput label='romanian' violet/>
                
                <CustomButton violet onClick={handler} value='fdf'>english</CustomButton>
                <CustomButton orange onClick={handler} value='fdf'>romanian</CustomButton>
                <CustomButton green onClick={handler} value='fdf'>polish</CustomButton>
                <CustomButton caraibbean widthFix onClick={handler} value='fdf'>french</CustomButton>
                <CustomButton  pink widthFix onClick={handler} value='fdf'>Add</CustomButton>
                <CustomButton onClick={handler} value='fdf'>send</CustomButton>
                <CustomInput label='romanian' labelColor='green' labelSize='4rem' onChange={handler}/>
                <WordsList />
                </div>
            </MainComponent>
            
        </div>

    )
}


export default Creation;