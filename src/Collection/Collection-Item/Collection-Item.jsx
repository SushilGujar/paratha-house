import React from 'react';
import './collection.item.styles.scss';
import CustomButton from '../../SignIn/CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/Cart/cart.actions';

const Item = function ({item, addItem}) {
    return(
        <div className='collection-item-container'>
            <div style={{
                backgroundImage: `url(${item.imageUrl})`
            }} className='img-container'>
                <CustomButton inverted onClick={() => addItem(item)}>Add to Cart</CustomButton>
            </div>
            <div className='item-footer'>
                <span>{item.name}</span>
                <span>{item.price}</span>
            </div>
            
        </div>
    );
};

const matchDispatchToProps = dispatch => ({
    addItem : (item) => dispatch(addItem(item))
});

export default connect(null, matchDispatchToProps)(Item);