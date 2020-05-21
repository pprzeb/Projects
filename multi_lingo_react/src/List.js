import React from 'react';

const List = (props) => {
    let keys = Object.keys(localStorage);
    keys.sort((a,b) => a-b)
    
    return (
    <div>
        <div className='flex tc bg-light-blue pa1 ma1 dib br3 bw3 shadow-5'>
        {props.langlist.length>0?(<h3 className='outline w-10 ma1 pa2 bg-light-green'>ID</h3>):('')}
        
        {props.langlist.map(it=> 
            <h3 key={it} className='outline w-25 ma1 pa2 bg-light-green'>{it}</h3>)}
        </div>

        {props.langlist.length>0?(keys.map((keyinDB, index) => 
        <div key={keyinDB} className='flex tc bg-light-blue pa1 ma1 dib br3 bw3 shadow-5'>
            <p className='outline w-10 ma1 pa2 bg-light-green'>{index+1}</p>
            { props.langlist.map(item =>
                <p key={'list' + item} className='br3 w-25 ma1 pa2 bg-light-green'>{JSON.parse(localStorage[keyinDB])[item]}</p>
            )}
            <button key={'button' + keyinDB} id={keyinDB} onClick={props.remove}>Remove</button>
        </div>)):('')}
        
    </div>)
}

export default List;