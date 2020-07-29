import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from './../../Collection-Preview/collectionPreview';

export default class ShopComponent extends Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;

        return (
            <div className='shop-page'>
              {
                  collections.map(({id, ...otherCollectionProps}) => (
                      <CollectionPreview key={id} {...otherCollectionProps} />
                  ))
              }
            </div>
        )
    }
}
