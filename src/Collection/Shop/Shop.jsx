import React from 'react';
import { Route } from 'react-router-dom';
import './shop.styles.scss';
import Collection from '../Collection/Collection';
import CollectionsOverview from '../Collections-Overview/Collections-Overview';

const Shop = ({match}) => {
    console.log(`in shop..`);
    return (
        <div className='preview'>
            <p>Collection</p>
            <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
            <Route path={`${match.path}/:collectionId`} component={Collection}></Route>
        </div>
    );
};

export default Shop;