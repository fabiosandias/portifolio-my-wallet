import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Dashboard from '../pages/dashboard/Dashboard';
import List from '../pages/list/List';

const AppRoutes = () => (
    <Layout>
        <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/list/:type" exact component={List} />
        </Switch>
    </Layout>
);

export default AppRoutes;