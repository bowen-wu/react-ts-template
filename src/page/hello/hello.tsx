import React from 'react';
import scopedClasses from '../../utils/scopedClasses';
import './hello.scss';

const sc = scopedClasses('hello');

const Hello = () => {
    return (
        <div className={sc()}>This is Hello Page</div>
    )
};

export default Hello;
