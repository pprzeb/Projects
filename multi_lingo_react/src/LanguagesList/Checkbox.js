import React from 'react';

const Checkbox = ({ className, disabled, name, checked = false, onChange, onChangeMainLang }) => (
    <div className={className}>
    <input className="ml2 mr2" type='checkbox' disabled={disabled} name={name} checked={checked} onChange={onChange}/>
    <button className="pv2 ph3 br3 bg-transparent ba b--transparent hover-bg-light-blue hover-dark-blue" onClick={onChangeMainLang} name={name}>{name}</button>
    </div>

  );

export default Checkbox;