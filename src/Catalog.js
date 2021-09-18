import React, { useState } from 'react';
import Item from './Item';
import './Catalog.styles.scss';

export default function Catalog (props) {
  
  const [catalog] = useState({ "items": [
        { "id": 1, "name": "Supreme Paratha", "desc": "Keema stuffed multi-grain paratha", "img": `https://foodsauda-cdn.s3.ap-south-1.amazonaws.com/Images/Menu/chicken-keema-parantha.jpg`},
        { "id": 2, "name": "Aaloo Paratha", "desc": "Potato stuffed paratha", "img": `/img/aloo_paratha.jpeg` }] });

    return(
        <div className='catalog'>
            {catalog.items.map( item => { return (<Item key={item.id} name={item.name} desc={item.desc} img={item.img}></Item>)})}
       </div>
    );
};