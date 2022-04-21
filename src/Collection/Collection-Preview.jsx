import React from 'react';
import './Shop/shop.styles.scss';
import Item from './Collection-Item/Collection-Item';

export default function Preview({title, items}) {
    return (
        <div className='preview'>
            <h4 className='title'>{title}</h4>
            <div className='items'>
                {
                    items.filter((item, idx) => idx < 4).map((item) => (<Item key={item.id} className='item' item={item}></Item>))
                }
            </div>
        </div>);
};