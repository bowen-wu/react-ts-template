import React from 'react';
import scopedClasses from '../../utils/scopedClasses';
import './welcome.scss';

const sc = scopedClasses('welcome');

const Welcome = () => {
    return (
        <div className={sc()}>This is Welcome Page</div>
    )
};

export default Welcome;
