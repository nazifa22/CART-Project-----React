import React from 'react';
import SHOP_DATA from './../shop/shop.data';
import './sneakers.scss'

const Sneakers = ({id, ...otherItemProps}) => {
    return (
        <div className="sneakers-page">

            {
                SHOP_DATA
                .filter((items) => items.routeName === 'sneakers')
                .map((items) => ( 
                    <div className="sneakers-page-item">
                        
                        {
                            items.items.map((singleItem) => (
                                <div>
                                
                                    <div className="item-image" style={{
                                        backgroundImage: `url(${singleItem.imageUrl})`
                                    }}>
                                    </div>
                                    <div className="sneakers-page-footer">
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

export default Sneakers;
