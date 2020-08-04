import React from 'react';
import SHOP_DATA from './../shop/shop.data';
import './women.scss';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import CollectionItem from '../../components/collection-item/collection-item.component';

const Womens = ({id, ...otherItemProps}) => {
    const filtered = SHOP_DATA.filter((items) => items.routeName === 'womens');

    return (
        <div className="womens-page-item">
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
)(Womens);
