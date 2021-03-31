import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Portfolios from '../pages/Portfolio';
import Home from '../pages/Home';

const Page: React.FC = () => {
  return (
    <Switch>
      <Route path="/portfolios">
        <Portfolios />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Page;
