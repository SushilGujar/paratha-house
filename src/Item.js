import React from 'react';

export default function Item (props) {
    return(
        <div className='item'>
            <div style={{ backgroundImage: `url(${props.img})`}} className='background-img'></div>
            <div className='content'>
                <h1 className='name'>{props.name.toUpperCase()}</h1>
                <span className='desc'>{props.desc}</span>
            </div>
        </div>
    );
};