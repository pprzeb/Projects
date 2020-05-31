import React from 'react';


const InputCardSentence = (props) => {

    return (
    <div className='tc bg-light-red pa1 ma1 dib br3 bw3 shadow-5'>
        <input ref={props.inputRef} className='pa1 ma1' type='text' size='40' name={props.langName}  onChange={props.getInput} value={props.value.get(props.langName)}  placeholder='Example sentence'/>   
    </div>)
}

export default InputCardSentence;