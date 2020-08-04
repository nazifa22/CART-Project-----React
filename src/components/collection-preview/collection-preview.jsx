import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';
import { Link } from 'react-router-dom';

const CollectionPreview = ({ title, items, routeName }) => {
  const path = routeName;

  return (
    <div className='collection-preview'>
      <Link className='title' to={path}>
        {title.toUpperCase()}
      </Link>
      <div className='preview'>
        {
          items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview;
