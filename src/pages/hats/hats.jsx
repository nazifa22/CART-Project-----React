import React from 'react';
import SHOP_DATA from './../shop/shop.data';
import './hats.scss';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../../components/custom-button/custom-button.component';
import CollectionItem from '../../components/collection-item/collection-item.component';
import '../../components/collection-item/collection-item.styles.scss';

const Hats = ({ item, addItem, ...otherItemProps }) => {
    const filtered = SHOP_DATA.filter((items) => items.routeName === 'hats');

    return (
        <div className="hats-page">
            {/* {
                SHOP_DATA
                .filter((items) => items.routeName === 'hats')
                .map((items) => ( 
                    <div className="hats-page-item">
                        
                        {
                            items.items.map((singleItem) => (
                                <div>
                                
                                    <div className="item-image" style={{
                                        backgroundImage: `url(${singleItem.imageUrl})`
                                    }}>
                                    </div>
                                    <div className="hats-page-footer">
                                        <span class="name">
                                            { singleItem.name }
                                        </span>
                                        <span class="price">
                                            ${ singleItem.price }
                                        </span>
            
                                        <CustomButton onClick={() => addItem(item)} >
                                            ADD TO CART
                                        </CustomButton>
                                    </div>
                                </div>
                            ))
                        }


                        
                        
                    </div>
                ))
            } */}

            <div className="hats-page-item">
                {

                    filtered.map(items => (
                        items.items
                        .map((item) => (
                            <CollectionItem key={item.id} item={item} width={true} />
                        ))
                    ))
                    
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(Hats);
