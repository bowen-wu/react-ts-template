import React from 'react';
import scopedClasses from '../../utils/scopedClasses';
import './not_found.scss';

const sc = scopedClasses('not-found');

const NotFound = () => {
    return (<div className={sc()}>This is Not Found Page</div>)
};

export default NotFound;
