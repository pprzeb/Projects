import React from 'react';

function getInput(e) {
    e.preventDefault();
    let x = e.target.value;
    console.log(x);
}
const InputCard = (lang) => {
    let x = lang.langName
    console.log('bla', lang)
    return (
    <div className='tc bg-light-blue pa1 ma1 dib br3 bw3 shadow-5'>
        
        <h3>{x}</h3>
        <input className='ma1 pa1' type='text' onChange={getInput} size='15'/>
    </div>)
}

export default InputCard;