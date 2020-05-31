import React from 'react';

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
    <div className="flex items-center mb2">
    <input className="mr2" type={type} name={name} checked={checked} onChange={onChange}/>
    <label className="lh-copy">{name}</label>
    </div>
    
  );

export default Checkbox;