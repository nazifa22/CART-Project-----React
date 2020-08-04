import React from 'react';
import SHOP_DATA from './../shop/shop.data';
import './hats.scss'

const Hats = ({id, ...otherItemProps}) => {
    return (
        <div className="hats-page">

            {
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

export default Hats;
