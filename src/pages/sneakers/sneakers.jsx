import React from 'react';
import SHOP_DATA from './../shop/shop.data';
import './sneakers.scss';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import CollectionItem from '../../components/collection-item/collection-item.component';

const Sneakers = ({id, ...otherItemProps}) => {
    const filtered = SHOP_DATA.filter((items) => items.routeName === 'sneakers');

    return (
        <div className="sneakers-page-item">
            {

                filtered.map(items => (
                    items.items
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} width={true} />
                    ))
                ))

            }
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(Sneakers);
