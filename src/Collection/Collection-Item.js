import React from 'react';
import './collection.styles.scss';

export default function Item ({name, imageUrl, price}) {
    return(
        <div className='collection-item-container'>
            <div style={{
                backgroundImage: `url(${imageUrl})`
            }} className='img-container'>
            </div>
            <div className='item-footer'>
                <span>{name}</span>
                <span>{price}</span>
            </div>
        </div>
    );
};