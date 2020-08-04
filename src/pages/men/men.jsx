import React from 'react';
import SHOP_DATA from './../shop/shop.data';
import './men.scss'

const Mens = ({id, ...otherItemProps}) => {
    return (
        <div className="mens-page">

            {
                SHOP_DATA
                .filter((items) => items.routeName === 'mens')
                .map((items) => ( 
                    <div className="mens-page-item">
                        
                        {
                            items.items.map((singleItem) => (
                                <div>
                                
                                    <div className="item-image" style={{
                                        backgroundImage: `url(${singleItem.imageUrl})`
                                    }}>
                                    </div>
                                    <div className="mens-page-footer">
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

export default Mens;
