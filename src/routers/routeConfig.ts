import {FunctionComponent} from 'react';
import Hello from '../page/hello/hello';
import Welcome from '../page/welcome/welcome';
import NotFound from '../page/not_found/not_found';

export interface RouterConfigInterface {
    path: string;
    component: FunctionComponent;
}

const routerConfig: Array<RouterConfigInterface> = [
    {
        path: '/hello',
        component: Hello,
    }, {
        path: '/welcome',
        component: Welcome,
    }, {
        path: '/not_found',
        component: NotFound
    }
];

export default routerConfig;
