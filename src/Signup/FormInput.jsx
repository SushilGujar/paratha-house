import React from 'react';
import './form-input.styles.scss';

export default function FormInput ({label, changeHandler, ...otherProps}) {
    return (
        <div className='group'>
            <input className='form-input' onChange={changeHandler} {...otherProps} />
            {
                label?
                (<label className={`${otherProps.value.length} 'shrink' : ''} form-input-label`}>{label}</label>): null
            }
        </div>);
};