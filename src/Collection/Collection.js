import React, { useState } from 'react';
import Preview from './Collection-Preview';
import SHOP_DATA from './shop.data';
import './collection.styles.scss';

export default function Collection (props){
    const [collection] = useState(SHOP_DATA);
    return (
        <div className='preview'>
            <h3 className='collection-title'>Collection</h3>
            {
                collection.map(({id, ...otherProps}) => (<Preview key={id} {...otherProps}></Preview>))
            }
        </div>
    );
};