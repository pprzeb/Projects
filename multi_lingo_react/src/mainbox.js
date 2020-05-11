import React from 'react';
import InputCard from './inputCard';

const lang = ['english', 'polonais', 'russe', 'francias', 'italian']

// const items = []

// for (let [index, item] of lang.entries()) {
//     items.push(<li key={item} id={index}>{index}{item}</li>)
// }

const MainBox = () => {
    return (
    <div className=''>
        
        <div>
        {lang.map((item, i) => {
            return <InputCard key={i} langName={item}/>
        })
        }
        </div>
        <button className='bg-light-blue pa2 ma2 br3 shadow-5'>Add</button>
        <div className='bg-light-purple tl ma3 pa3 br2 shadow-5 calisto b navy'>
            list
        </div>
    </div>)
}

export default MainBox;