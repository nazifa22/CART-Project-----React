import React from 'react';
import SHOP_DATA from './../shop/shop.data';
import './women.scss'

const Womens = ({id, ...otherItemProps}) => {
    return (
        <div className="sneakewomensrs-page">

            {
                SHOP_DATA
                .filter((items) => items.routeName === 'womens')
                .map((items) => ( 
                    <div className="womens-page-item">
                        
                        {
                            items.items.map((singleItem) => (
                                <div>
                                
                                    <div className="item-image" style={{
                                        backgroundImage: `url(${singleItem.imageUrl})`
                                    }}>
                                    </div>
                                    <div className="womens-page-footer">
                                        <span class="name">
                                            { singleItem.name }
                                        </span>
                                        <span class="price">
                                            ${ singleItem.price }
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                ))
            }
        </div>
    )
}

export default Womens;
