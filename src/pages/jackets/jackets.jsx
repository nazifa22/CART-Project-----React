import React from 'react';
import SHOP_DATA from './../shop/shop.data';
import './jackets.scss'

const Jackets = ({id, ...otherItemProps}) => {
    return (
        <div className="jackets-page">

            {
                SHOP_DATA
                .filter((items) => items.routeName === 'jackets')
                .map((items) => ( 
                    <div className="jackets-page-item">
                        
                        {
                            items.items.map((singleItem) => (
                                <div>
                                
                                    <div className="item-image" style={{
                                        backgroundImage: `url(${singleItem.imageUrl})`
                                    }}>
                                    </div>
                                    <div className="jackets-page-footer">
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

export default Jackets;
