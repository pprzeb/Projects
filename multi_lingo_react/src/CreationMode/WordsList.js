import React from 'react';

const WordsList = (props) => {
    let keys = Object.keys(localStorage);
    keys.sort((a,b) => a-b)
    
    return (
    <div>
        {props.langlist.length>0?(keys.map((keyinDB, index) => 
        <div key={keyinDB} className='flex justify-center tc bg-light-blue ma1 dib br3 bw3 shadow-5'>
            <p className='br w-10 ma1 pa2 '>{index+1}</p>
            { props.langlist.map(item =>
                <p key={'list' + item} className='br w-25 ma1 pa2'>{JSON.parse(localStorage[keyinDB])[item]}</p>
            )}
            <button className='f6 grow br3 ma1 white bg-red bw0 shadow-1' key={'button' + keyinDB} id={keyinDB} onClick={props.remove}>Remove</button>
        </div>)):('')}
        
    </div>)
}

export default WordsList;