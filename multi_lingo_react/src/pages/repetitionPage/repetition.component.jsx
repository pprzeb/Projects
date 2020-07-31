import React from 'react';

import MainComponent from '../../components/main-component/main-component.component'
import CustomInput from '../../components/customInput/customInput.component';
import CustomButton from '../../components/customButton/customButton.component'
import './repetition.style.scss';
import {db} from '../../example';

import { connect } from 'react-redux';


const RepetitionPage = ({checkedLangs}) => {
    const inputs = []
    
    const handlerInput = (e) => {
        console.log(e.target.id, e.target.value)
    
    }

    const handlerClick = (e) => {
        console.log(e.target)
    }
    checkedLangs.forEach((item, key) => {
        if (!item[0]) {
            return
        } else {
            inputs.push(<CustomInput id={key+'Input'} key={key+'Input'} onChange={handlerInput} label={key} />);
            inputs.push(<CustomInput id={key+'Example'} key={key+'Example'} onChange={handlerInput} inputSize='30rem' hidden />)
        }
    } )
    
    return(
        <div>
            <MainComponent>
                <div className='repWrapper'>
                <div>
                    <h5>{db[1].items.english}</h5>
                    <p>{db[1].examples.english}</p>
                    
                </div>
                <div className='wrapper'>
                    {inputs}
                </div>
                <div>
                    <CustomButton onClick={handlerClick}>Add</CustomButton>
                </div>
                </div>
            </MainComponent>
        </div>
    )   
}

const mapStateToProps = state => ({
    checkedLangs: state.langs.checkedItems
})

export default connect(mapStateToProps)(RepetitionPage);