import React from 'react';
import './collection-preview.scss';
import CollectionItems from './../Collection-Items/collectionItems';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className="title">{ title.toUpperCase() }</h1>
            <div className="preview">
                {
                    items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...otherItemProps}) => (
                        <CollectionItems key={id} {...otherItemProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;