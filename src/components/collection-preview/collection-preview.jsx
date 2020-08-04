import React from 'react';
import { Link } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, routeName }) => {
  const path = routeName;

  return (
    <div className='collection-preview'>
      {/* <h1 className='title'>{title.toUpperCase()}</h1> */}

      <Link className='title' to={path}>
          {title.toUpperCase()}
      </Link>
      
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
};

export default CollectionPreview;
