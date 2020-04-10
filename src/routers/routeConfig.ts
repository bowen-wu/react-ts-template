import {FunctionComponent} from 'react';
import Hello from '../page/hello/hello';
import Welcome from '../page/welcome/welcome';

export interface RouterConfigInterface {
    path: string;
    component: FunctionComponent;
}
const routerConfig: Array<RouterConfigInterface> = [
    {
        path: '/hello',
        component: Hello,
    },
    {
        path: '/welcome',
        component: Welcome,
    },
];

export default routerConfig;
