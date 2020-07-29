import React from 'react';
import './homepage.scss'
import DirectoryComponent from '../../Directory/directoryComponent';

const Homepage = () => {
    return (
        <div className='homepage'>
            <h1>Welcome to my Homepage</h1>
           <DirectoryComponent />
        </div>
    )
}

export default Homepage;
