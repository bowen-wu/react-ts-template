import React from 'react';
import { Button } from 'antd';
import scopedClasses from '../../utils/scopedClasses';
import './hello.scss';

const sc = scopedClasses('hello');

const Hello = () => {
    return (
        <div className={sc()}>
            <h1>This is Hello Page</h1>
            <Button type="primary">Button</Button>
        </div>
    )
};

export default Hello;
