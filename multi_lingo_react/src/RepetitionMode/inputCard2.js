import React from 'react';


const InputCard = (props) => {

    return (
    <div className='tl w-30 bg-light-blue pa1 ma1 dib br3 bw3 shadow-5'>
        <h3 className='w-40 dib ma1 pa1'>{props.langName} :</h3>
        <input ref={props.inputRef} className='w-50 ma1 pa1' type='text' size='11' name={props.langName}  onChange={props.getInput} value={props.value.get(props.langName)}/>
        
    </div>)
}

export default InputCard;