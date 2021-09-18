import React from 'react';
import './collection.styles.scss';
import Item from './Collection-Item';

export default function Preview({title, items}) {
    return (
        <div className='preview'>
            <h4 className='title'>{title}</h4>
            <div className='items'>
                {
                    items.filter((item, idx) => idx < 4).map(({id, ...otherProps}) => (<Item key={id} className='item' {...otherProps}></Item>))
                }
            </div>
        </div>);
};