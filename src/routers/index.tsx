import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NotFound from '../page/not_found/not_found';
import routerConfig, {RouterConfigInterface} from './routeConfig';

const Routers = () => {
    const {pathname} = window.location;
    const [basename, setBasename] = useState<string>('');
    const targetRouterConfig = routerConfig.find((router: RouterConfigInterface) => router.path === pathname);

    useEffect(() => {
        if (window.location.host.indexOf('localhost') < 0) {
            setBasename('');
        }
    }, []);

    return (
        <BrowserRouter basename={basename}>
            <Switch>
                <Route path={pathname} component={targetRouterConfig ? targetRouterConfig.component : NotFound}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Routers;


